import { useState } from "react";
import { DashboardCard } from "./DashboardCard";
import { SeverityCount } from "./SeverityCount";
import { SourceFilter } from "./SourceFilter";
import { Source } from "@/data/mockData";
import { Progress } from "@/components/ui/progress";

interface VulnerabilitiesProps {
  data: {
    critical: number;
    high: number;
    medium: number;
    sources: {
      edr: { critical: number; high: number; medium: number };
      vas: { critical: number; high: number; medium: number };
    };
  };
}

export function VulnerabilitiesOverview({ data }: VulnerabilitiesProps) {
  const [filter, setFilter] = useState<Source>("All");

  const getFilteredData = () => {
    if (filter === "EDR") return data.sources.edr;
    if (filter === "VAS") return data.sources.vas;
    return { critical: data.critical, high: data.high, medium: data.medium };
  };

  const filtered = getFilteredData();
  const total = filtered.critical + filtered.high + filtered.medium;

  return (
    <DashboardCard
      title="Vulnerabilities Overview"
      headerAction={
        <SourceFilter
          value={filter}
          onChange={setFilter}
          options={["All", "EDR", "VAS"]}
        />
      }
    >
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <SeverityCount severity="critical" count={filtered.critical} size="sm" />
          <SeverityCount severity="high" count={filtered.high} size="sm" />
          <SeverityCount severity="medium" count={filtered.medium} size="sm" />
        </div>
        
        {/* Stacked bar visualization */}
        <div className="space-y-1">
          <div className="flex h-2 rounded-full overflow-hidden bg-muted">
            <div 
              className="bg-severity-critical transition-all" 
              style={{ width: `${(filtered.critical / total) * 100}%` }} 
            />
            <div 
              className="bg-severity-high transition-all" 
              style={{ width: `${(filtered.high / total) * 100}%` }} 
            />
            <div 
              className="bg-severity-medium transition-all" 
              style={{ width: `${(filtered.medium / total) * 100}%` }} 
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Total: {total}</span>
            <span>EDR + VAS</span>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}
