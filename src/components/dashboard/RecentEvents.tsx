import { useState, useMemo } from "react";
import { DashboardCard } from "./DashboardCard";
import { SourceFilter } from "./SourceFilter";
import { Source, Severity } from "@/data/mockData";
import { cn } from "@/lib/utils";

interface Event {
  id: number;
  timestamp: string;
  source: string;
  severity: Severity;
  description: string;
}

interface RecentEventsProps {
  events: Event[];
}

const severityStyles: Record<Severity, string> = {
  critical: "text-severity-critical",
  high: "text-severity-high",
  medium: "text-severity-medium",
  low: "text-severity-low",
};

export function RecentEvents({ events }: RecentEventsProps) {
  const [filter, setFilter] = useState<Source>("All");

  const filteredEvents = useMemo(() => {
    if (filter === "All") return events;
    return events.filter((e) => e.source === filter);
  }, [events, filter]);

  return (
    <DashboardCard
      title="Recent Events"
      headerAction={
        <SourceFilter value={filter} onChange={setFilter} />
      }
      className="h-full"
    >
      <div className="space-y-1 overflow-auto max-h-[280px] soc-scrollbar pr-2">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="flex items-start gap-3 p-2 rounded hover:bg-muted/30 cursor-pointer transition-colors animate-slide-in"
          >
            <div className={cn("severity-dot mt-1.5 shrink-0", `severity-${event.severity}`)} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-mono text-xs text-muted-foreground">
                  {event.timestamp}
                </span>
                <span className="px-1.5 py-0.5 text-[10px] rounded bg-muted text-muted-foreground uppercase">
                  {event.source}
                </span>
                <span className={cn("text-xs font-medium uppercase", severityStyles[event.severity])}>
                  {event.severity}
                </span>
              </div>
              <p className="text-sm text-foreground/90 truncate">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
