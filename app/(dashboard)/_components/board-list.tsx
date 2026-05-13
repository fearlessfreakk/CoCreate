"use client";

import { use } from "react";

import { EmptySearch } from "./empty-search";
import { EmptyBoards } from "./empty-boards";
import { EmptyFavorites } from "./empty-favorites";

interface BoardListProps {
  orgId: string;
  query: any;
};

export const BoardList = ({
    orgId,
    query,
}: BoardListProps) => {
    const resolvedQuery = use(query) as { search?: string; favorites?: string };
    const data = []; // TODO : change to api call

    if(!data?.length && resolvedQuery.search){
        return <EmptySearch />;
    }

    if(!data.length && resolvedQuery.favorites){
        return <EmptyFavorites />;
    }
    
    if(!data?.length){
        return <EmptyBoards />;
    }

    return(
        <div>
            {JSON.stringify(resolvedQuery)}
        </div>
    )
}