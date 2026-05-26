"use client"

import { ReactNode } from "react"
import { ClientSideSuspense, LiveblocksProvider, RoomProvider } from "@liveblocks/react";

interface RoomProps {
    children: ReactNode;
    roomId: string;
    fallback: ReactNode
};

export const Room = ({ children, roomId, fallback }: RoomProps) => {
    return (
        <LiveblocksProvider publicApiKey={process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_API_KEY!}>
            <RoomProvider
                id={roomId}
                initialPresence={{}}
                initialStorage={{}}
            >
                <ClientSideSuspense fallback={fallback}>
                    {children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    )
}