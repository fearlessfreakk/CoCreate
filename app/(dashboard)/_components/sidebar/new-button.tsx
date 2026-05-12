"use client";

import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";
import { Hint } from "@/components/ui/hint";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";

export const Newbutton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint
            side="right"
            align="start"
            sideOffset={18}
            alignOffset={0}
            label="Create an organization"
          >
            <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
              <Plus className="text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent
        className="p-0 bg-transparent border-none max-w-[430px] shadow-none ring-0"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only">Create organization</DialogTitle>
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};
