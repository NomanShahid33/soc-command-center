import { useState, useMemo } from "react";
import { DashboardCard } from "./DashboardCard";
import { SourceFilter } from "./SourceFilter";
import { Source } from "@/data/mockData";

interface Intruder {
  ip: string;
  eventCount: number;
  source: string;
}

interface TopIntrudersProps {
  intruders: Intruder[];
}

export function TopIntruders({ intruders }: TopIntrudersProps) {
  const [filter, setFilter] = useState<Source>("All");

  const filteredIntruders = useMemo(() => {
    if (filter === "All") return intruders;
    return intruders.filter((i) => i.source === filter);
  }, [intruders, filter]);

  return (
    <DashboardCard
      title="Top Intruders"
      headerAction={<SourceFilter value={filter} onChange={setFilter} />}
    >
      <div className="overflow-auto max-h-[200px] soc-scrollbar">
        <table className="soc-table">
          <thead className="sticky top-0 bg-card">
            <tr>
              <th>IP Address</th>
              <th className="text-right">Events</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            {filteredIntruders.map((intruder, i) => (
              <tr key={i} className="cursor-pointer">
                <td className="font-mono text-sm">{intruder.ip}</td>
                <td className="text-right font-mono text-severity-high">
                  {intruder.eventCount}
                </td>
                <td>
                  <span className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground">
                    {intruder.source}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardCard>
  );
}
