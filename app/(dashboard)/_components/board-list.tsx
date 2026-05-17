"use client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import { use } from "react";

import { EmptySearch } from "./empty-search";
import { EmptyBoards } from "./empty-boards";
import { EmptyFavorites } from "./empty-favorites";
import { NewBoardButton } from "./new-board-button";
import { BoardCard } from "./board-card";

interface BoardListProps {
  orgId: string;
  query: any;
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const resolvedQuery = use(query) as { search?: string; favorites?: string };
  const data = useQuery(api.boards.get, { orgId });

  if (data === undefined) {
    return <div>Loading...</div>;
  }

  if (!data?.length && resolvedQuery.search) {
    return <EmptySearch />;
  }

  if (!data.length && resolvedQuery.favorites) {
    return <EmptyFavorites />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }

  return (
    <div>
      <h2 className="text-3xl">
        {resolvedQuery.favorites ? "Favorite boards" : "Team boards"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        <NewBoardButton orgId={orgId} />
        {data?.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={false}
          />
        ))}
      </div>
    </div>
  );
};
