"use client";

import Link from "next/link";
import Image from "next/image";

interface BoardCardProps {
  id: string;
  title: string;
  authorName: string;
  authorId: string;
  createdAt: number;
  imageUrl: string;
  orgId: string;
  isFavorite: boolean;
}

export const BoardCard = ({
  id,
  title,
  authorId,
  authorName,
  createdAt,
  imageUrl,
  orgId,
  isFavorite,
}: BoardCardProps) => {
  return (
    <Link href={`/board/${id}`} className="block">
      <div
        style={{ aspectRatio: "100/127" }}
        className="group border rounded-lg flex flex-col justify-between overflow-hidden"
      >
        <div className="relative flex-1 bg-amber-50">
          <Image src={imageUrl} alt="doodle" fill className="object-cover" />
        </div>
      </div>
    </Link>
  );
};
