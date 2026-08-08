"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CalendarDays, Eye, MapPin, Search, Trash2, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export type RecentRequest = {
  id: string;
  holidayHomes: number;
  campingPitches: number;
  rooms: number;
  desiredDate: string;
  desiredTime: string;
  name: string;
  telephone: string;
  email: string;
};

type RecentRequestsProps = {
  /** Pass requests from the API when it is available. */
  requests?: RecentRequest[];
  /** Link to the full request-management screen. */
  viewAllHref?: string;
  /** Enables deletion when a parent supplies a safe delete handler. */
  onDelete?: (request: RecentRequest) => void;
};

const previewRequests: RecentRequest[] = [
  { id: "1", holidayHomes: 1, campingPitches: 0, rooms: 3, desiredDate: "03 Aug 2026", desiredTime: "11:00 AM", name: "Courtney Henry", telephone: "(217) 555-0113", email: "debra.holt@example.com" },
  { id: "2", holidayHomes: 1, campingPitches: 0, rooms: 2, desiredDate: "03 Aug 2026", desiredTime: "11:00 AM", name: "Darrell Steward", telephone: "(209) 555-0104", email: "curtis.weaver@example.com" },
  { id: "3", holidayHomes: 1, campingPitches: 1, rooms: 1, desiredDate: "03 Aug 2026", desiredTime: "11:00 AM", name: "Jacob Jones", telephone: "(229) 555-0109", email: "sara.cruz@example.com" },
  { id: "4", holidayHomes: 1, campingPitches: 0, rooms: 2, desiredDate: "03 Aug 2026", desiredTime: "11:00 AM", name: "Floyd Miles", telephone: "(808) 555-0111", email: "willie.jennings@example.com" },
  { id: "5", holidayHomes: 1, campingPitches: 1, rooms: 3, desiredDate: "03 Aug 2026", desiredTime: "11:00 AM", name: "Brooklyn Simmons", telephone: "(405) 555-0128", email: "tanya.hill@example.com" },
];

const fields = [
  ["Holiday homes", "holidayHomes"],
  ["Camping pitches", "campingPitches"],
  ["Rooms", "rooms"],
] as const;

export default function RecentRequests({
  requests = previewRequests,
  viewAllHref,
  onDelete,
}: RecentRequestsProps) {
  const [search, setSearch] = useState("");
  const [selectedRequest, setSelectedRequest] = useState<RecentRequest | null>(null);

  const filteredRequests = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return requests.slice(0, 5);

    return requests.filter((request) =>
      [request.name, request.email, request.telephone].some((value) =>
        value.toLowerCase().includes(query),
      ),
    );
  }, [requests, search]);

  const renderActions = (request: RecentRequest) => (
    <div className="flex items-center justify-end gap-1">
      <button
        type="button"
        onClick={() => setSelectedRequest(request)}
        className="rounded-lg p-2 text-primary transition-colors hover:bg-[#EEF2FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-label={`View request from ${request.name}`}
        title="View request details"
      >
        <Eye className="h-4 w-4" />
      </button>
      {onDelete && (
        <button
          type="button"
          onClick={() => onDelete(request)}
          className="rounded-lg p-2 text-[#C2410C] transition-colors hover:bg-[#FFF1EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C2410C] focus-visible:ring-offset-2"
          aria-label={`Delete request from ${request.name}`}
          title="Delete request"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      )}
    </div>
  );

  return (
    <section className="px-6 pb-10" aria-labelledby="recent-requests-heading">
      <div className="rounded-2xl border border-[#E4EAF3] bg-white p-4 shadow-sm sm:p-5">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEF2FF] text-primary">
                <CalendarDays className="h-5 w-5" />
              </span>
              <div>
                <h2 id="recent-requests-heading" className="text-lg font-semibold text-[#1F2937]">Recent requests</h2>
                <p className="text-sm text-[#6B7280]">Latest accommodation enquiries</p>
              </div>
            </div>
          </div>
          {viewAllHref && (
            <Link href={viewAllHref} className="w-fit text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              View all requests
            </Link>
          )}
        </div>

        <div className="relative mb-4 max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7280]" />
          <Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search by name, email or phone" className="h-10 rounded-lg border-[#D8E0EC] pl-9 text-sm placeholder:text-[#8A94A6]" />
        </div>

        {filteredRequests.length ? (
          <>
            <div className="hidden overflow-x-auto rounded-xl border border-[#E8EDF4] md:block">
              <table className="min-w-[980px] w-full text-sm">
                <thead className="bg-[#F5F8FC] text-left text-xs font-semibold uppercase tracking-wide text-[#64748B]">
                  <tr>
                    {fields.map(([label]) => <th key={label} className="px-4 py-3">{label}</th>)}
                    <th className="px-4 py-3">Requested for</th>
                    <th className="px-4 py-3">Guest</th>
                    <th className="px-4 py-3">Contact</th>
                    <th className="px-4 py-3 text-right"><span className="sr-only">Actions</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8EDF4]">
                  {filteredRequests.map((request) => (
                    <tr key={request.id} className="transition-colors hover:bg-[#FAFBFD]">
                      {fields.map(([, key]) => <td key={key} className="px-4 py-4 font-medium text-[#334155]">{request[key]}</td>)}
                      <td className="px-4 py-4 text-[#475569]"><div className="font-medium">{request.desiredDate}</div><div className="mt-0.5 text-xs text-[#7C8799]">{request.desiredTime}</div></td>
                      <td className="px-4 py-4 font-medium text-[#334155]">{request.name}</td>
                      <td className="px-4 py-4"><a href={`tel:${request.telephone}`} className="block whitespace-nowrap text-[#475569] hover:text-primary hover:underline">{request.telephone}</a><a href={`mailto:${request.email}`} className="block max-w-[220px] truncate text-xs text-[#64748B] hover:text-primary hover:underline">{request.email}</a></td>
                      <td className="px-2 py-4">{renderActions(request)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-3 md:hidden">
              {filteredRequests.map((request) => (
                <article key={request.id} className="rounded-xl border border-[#E8EDF4] p-4">
                  <div className="flex items-start justify-between gap-3"><div><h3 className="font-semibold text-[#1F2937]">{request.name}</h3><a href={`mailto:${request.email}`} className="text-sm text-[#64748B] hover:text-primary hover:underline">{request.email}</a></div>{renderActions(request)}</div>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs"><div className="rounded-lg bg-[#F5F8FC] p-2"><Users className="mx-auto mb-1 h-4 w-4 text-primary" />{request.holidayHomes} homes</div><div className="rounded-lg bg-[#F5F8FC] p-2"><MapPin className="mx-auto mb-1 h-4 w-4 text-primary" />{request.campingPitches} pitches</div><div className="rounded-lg bg-[#F5F8FC] p-2"><Users className="mx-auto mb-1 h-4 w-4 text-primary" />{request.rooms} rooms</div></div>
                  <p className="mt-3 text-sm text-[#475569]"><span className="font-medium">Requested:</span> {request.desiredDate} at {request.desiredTime}</p>
                  <a href={`tel:${request.telephone}`} className="mt-1 block text-sm text-[#475569] hover:text-primary hover:underline">{request.telephone}</a>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="flex min-h-44 flex-col items-center justify-center rounded-xl border border-dashed border-[#D8E0EC] px-4 text-center"><Search className="mb-2 h-5 w-5 text-[#94A3B8]" /><p className="font-medium text-[#475569]">No matching requests</p><button type="button" onClick={() => setSearch("")} className="mt-1 text-sm font-semibold text-primary hover:underline">Clear search</button></div>
        )}
      </div>

      <Dialog open={Boolean(selectedRequest)} onOpenChange={(open) => !open && setSelectedRequest(null)}>
        <DialogContent className="max-w-md rounded-xl">
          <DialogHeader><DialogTitle>Request details</DialogTitle><DialogDescription>Accommodation enquiry from {selectedRequest?.name}</DialogDescription></DialogHeader>
          {selectedRequest && <div className="grid grid-cols-2 gap-3 text-sm"><Detail label="Holiday homes" value={selectedRequest.holidayHomes} /><Detail label="Camping pitches" value={selectedRequest.campingPitches} /><Detail label="Rooms" value={selectedRequest.rooms} /><Detail label="Requested for" value={`${selectedRequest.desiredDate}, ${selectedRequest.desiredTime}`} /><Detail label="Telephone" value={selectedRequest.telephone} /><Detail label="Email" value={selectedRequest.email} /></div>}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string | number }) {
  return <div className="rounded-lg bg-[#F5F8FC] p-3 last:col-span-2"><p className="text-xs font-medium text-[#64748B]">{label}</p><p className="mt-1 break-words font-medium text-[#334155]">{value}</p></div>;
}
