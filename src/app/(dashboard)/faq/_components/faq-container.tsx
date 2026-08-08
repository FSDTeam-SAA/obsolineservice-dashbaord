"use client";

import { useMemo, useState } from "react";
import { Eye, Pencil, Plus, Trash2 } from "lucide-react";
import DeleteModal from "@/components/modals/delete-modal";
import MireyagsPagination from "@/components/ui/mireyags-pagination";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import AddEditFaqForm, { FaqFormValues } from "../add-edit-faq/_components/add-edit-faq-form";
import ViewFaq from "./view-faq";

export type Faq = {
  id: string;
  question: string;
  answer: string;
};

type FaqContainerProps = {
  /** Supply API data here when the FAQ endpoint is connected. */
  initialFaqs?: Faq[];
};

const SAMPLE_FAQS: Faq[] = [
  { id: "1", question: "What is this website for?", answer: "This website helps guests find accommodation and send enquiries for their preferred stay." },
  { id: "2", question: "What is the project estimate?", answer: "Estimates depend on the accommodation type, dates, and any extra services you select." },
  { id: "3", question: "What is the average response time?", answer: "Most enquiries receive a response within one business day." },
  { id: "4", question: "Can I report scams?", answer: "Yes. Contact our support team with the listing details so we can investigate it promptly." },
  { id: "5", question: "How do I make an enquiry?", answer: "Choose your accommodation, provide your preferred dates, and submit the enquiry form." },
  { id: "6", question: "Can I change my booking dates?", answer: "You can request a date change by contacting the accommodation provider directly." },
  { id: "7", question: "Are pets allowed?", answer: "Pet policies vary by property. Check the property details before submitting an enquiry." },
  { id: "8", question: "Do I need an account?", answer: "An account makes it easier to manage enquiries, but requirements may vary by service." },
  { id: "9", question: "How are payments handled?", answer: "Payment instructions are provided by the accommodation provider after your enquiry is accepted." },
  { id: "10", question: "Can I cancel an enquiry?", answer: "Yes. Please notify the provider as soon as possible if your plans change." },
  { id: "11", question: "Where can I find support?", answer: "Use the contact page to reach support with any questions about your enquiry." },
  { id: "12", question: "Is my information secure?", answer: "We handle information according to our privacy and security practices." },
];

const PAGE_SIZE = 5;

export default function FaqContainer({ initialFaqs = SAMPLE_FAQS }: FaqContainerProps) {
  const [faqs, setFaqs] = useState(initialFaqs);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFaq, setSelectedFaq] = useState<Faq | null>(null);
  const [editingFaq, setEditingFaq] = useState<Faq | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [faqToDelete, setFaqToDelete] = useState<Faq | null>(null);

  const totalPages = Math.max(1, Math.ceil(faqs.length / PAGE_SIZE));
  const visibleFaqs = useMemo(
    () => faqs.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE),
    [currentPage, faqs],
  );

  const openCreateDialog = () => {
    setEditingFaq(null);
    setIsFormOpen(true);
  };

  const openEditDialog = (faq: Faq) => {
    setEditingFaq(faq);
    setIsFormOpen(true);
  };

  const saveFaq = ({ question, answer }: FaqFormValues) => {
    if (editingFaq) {
      setFaqs((items) => items.map((item) => item.id === editingFaq.id ? { ...item, question, answer } : item));
    } else {
      setFaqs((items) => [{ id: crypto.randomUUID(), question, answer }, ...items]);
      setCurrentPage(1);
    }
    setEditingFaq(null);
    setIsFormOpen(false);
  };

  const deleteFaq = () => {
    if (!faqToDelete) return;
    setFaqs((items) => {
      const updatedItems = items.filter((item) => item.id !== faqToDelete.id);
      const updatedTotalPages = Math.max(1, Math.ceil(updatedItems.length / PAGE_SIZE));
      setCurrentPage((page) => Math.min(page, updatedTotalPages));
      return updatedItems;
    });
    setFaqToDelete(null);
  };

  const showingFrom = faqs.length ? (currentPage - 1) * PAGE_SIZE + 1 : 0;
  const showingTo = Math.min(currentPage * PAGE_SIZE, faqs.length);

  const actions = (faq: Faq) => (
    <div className="flex items-center justify-end gap-1">
      <button type="button" onClick={() => setSelectedFaq(faq)} className="rounded-md p-2 text-primary transition-colors hover:bg-[#EEF2FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label={`View ${faq.question}`} title="View FAQ"><Eye className="h-4 w-4" /></button>
      <button type="button" onClick={() => openEditDialog(faq)} className="rounded-md p-2 text-primary transition-colors hover:bg-[#EEF2FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label={`Edit ${faq.question}`} title="Edit FAQ"><Pencil className="h-4 w-4" /></button>
      <button type="button" onClick={() => setFaqToDelete(faq)} className="rounded-md p-2 text-primary transition-colors hover:bg-[#EEF2FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label={`Delete ${faq.question}`} title="Delete FAQ"><Trash2 className="h-4 w-4" /></button>
    </div>
  );

  return (
    <section className="p-6" aria-labelledby="faq-heading">
      <div className="mb-3 flex justify-end">
        <button type="button" onClick={openCreateDialog} className="inline-flex h-9 items-center gap-2 rounded-full bg-primary px-4 text-xs font-medium text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"><Plus className="h-3.5 w-3.5" />Add New FAQ</button>
      </div>

      <div className="overflow-hidden rounded-lg border border-[#E4EAF3] bg-white">
        <div className="hidden overflow-x-auto md:block">
          <table className="min-w-[720px] w-full table-fixed">
            <thead className="bg-[#EDF4F8]">
              <tr className="text-left text-[10px] font-medium text-[#475569]"><th className="w-[34%] px-6 py-3 text-center">Question</th><th className="w-[48%] px-6 py-3 text-center">Answer</th><th className="w-[18%] px-6 py-3 text-center">Action</th></tr>
            </thead>
            <tbody className="divide-y divide-[#E4EAF3]">
              {visibleFaqs.map((faq) => <tr key={faq.id} className="transition-colors hover:bg-[#FAFBFD]"><td className="px-6 py-3 text-center text-xs text-[#475569]">{faq.question}</td><td className="px-6 py-3 text-center text-xs leading-4 text-[#64748B]"><p className="mx-auto line-clamp-2 max-w-md">{faq.answer}</p></td><td className="px-6 py-3">{actions(faq)}</td></tr>)}
            </tbody>
          </table>
        </div>

        <div className="space-y-3 p-3 md:hidden">
          {visibleFaqs.map((faq) => <article key={faq.id} className="rounded-lg border border-[#E4EAF3] p-4"><div className="flex items-start justify-between gap-2"><h2 className="font-medium text-[#334155]">{faq.question}</h2>{actions(faq)}</div><p className="mt-2 text-sm leading-5 text-[#64748B]">{faq.answer}</p></article>)}
        </div>
      </div>

      {faqs.length === 0 ? <div className="py-12 text-center text-sm text-[#64748B]">No FAQs yet. Add your first question to get started.</div> : <div className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm text-[#9CA3AF]">Showing {showingFrom} to {showingTo} of {faqs.length} results</p>{totalPages > 1 && <MireyagsPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />}</div>}

      <ViewFaq faq={selectedFaq} open={selectedFaq !== null} onOpenChange={(open) => !open && setSelectedFaq(null)} />

      <Dialog open={isFormOpen} onOpenChange={(open) => { if (!open) { setIsFormOpen(false); setEditingFaq(null); } }}>
        <DialogContent className="max-w-3xl border-0 bg-transparent p-0 shadow-none"><AddEditFaqForm faq={editingFaq} onSubmit={saveFaq} onCancel={() => { setIsFormOpen(false); setEditingFaq(null); }} /></DialogContent>
      </Dialog>

      {faqToDelete && <DeleteModal isOpen={Boolean(faqToDelete)} onClose={() => setFaqToDelete(null)} onConfirm={deleteFaq} title="Delete this FAQ?" desc="This FAQ will be removed and can no longer be shown to visitors." />}
    </section>
  );
}
