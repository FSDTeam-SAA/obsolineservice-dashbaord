"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type ViewFaqProps = {
  faq: { question: string; answer: string } | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

/** Read-only FAQ details, intentionally separate from the add/edit form. */
export default function ViewFaq({ faq, open, onOpenChange }: ViewFaqProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[465px] rounded-lg border-0 bg-white p-6 sm:p-7">
        <DialogHeader className="space-y-5 pr-5 text-left">
          <div><DialogTitle className="text-xs font-semibold text-[#343A40]">Question</DialogTitle><DialogDescription className="mt-2 text-xs leading-5 text-[#475569]">{faq?.question}</DialogDescription></div>
          <div><DialogTitle className="text-xs font-semibold text-[#343A40]">Answer</DialogTitle><DialogDescription className="mt-2 text-xs leading-5 text-[#64748B]">{faq?.answer}</DialogDescription></div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
