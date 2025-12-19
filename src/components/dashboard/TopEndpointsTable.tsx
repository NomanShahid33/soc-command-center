import { useState, useMemo } from "react";
import { DashboardCard } from "./DashboardCard";
import { SourceFilter } from "./SourceFilter";
import { Source } from "@/data/mockData";

interface Endpoint {
  name: string;
  count: number;
  source: string;
}

interface TopEndpointsTableProps {
  endpoints: Endpoint[];
}

export function TopEndpointsTable({ endpoints }: TopEndpointsTableProps) {
  const [filter, setFilter] = useState<Source>("All");
  
  const filteredEndpoints = useMemo(() => {
    if (filter === "All") return endpoints;
    return endpoints.filter((e) => e.source === filter);
  }, [endpoints, filter]);

  return (
    <DashboardCard 
      title="Top Affected Endpoints"
      headerAction={
        <SourceFilter 
          value={filter} 
          onChange={setFilter}
          options={["All", "EDR", "NDR", "WAF"]}
        />
      }
    >
      <div className="overflow-auto max-h-[220px] soc-scrollbar">
        <table className="soc-table">
          <thead className="sticky top-0 bg-card">
            <tr>
              <th>Endpoint</th>
              <th className="text-right">Detections</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            {filteredEndpoints.map((endpoint, i) => (
              <tr key={i} className="cursor-pointer">
                <td className="font-mono text-sm">{endpoint.name}</td>
                <td className="text-right font-mono text-severity-high">{endpoint.count}</td>
                <td>
                  <span className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground">
                    {endpoint.source}
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
