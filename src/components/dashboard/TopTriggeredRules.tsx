import { useState, useMemo } from "react";
import { DashboardCard } from "./DashboardCard";
import { SourceFilter } from "./SourceFilter";
import { Source } from "@/data/mockData";

interface Rule {
  name: string;
  count: number;
  source: string;
}

interface TopTriggeredRulesProps {
  rules: Rule[];
}

export function TopTriggeredRules({ rules }: TopTriggeredRulesProps) {
  const [filter, setFilter] = useState<Source>("All");

  const filteredRules = useMemo(() => {
    if (filter === "All") return rules;
    return rules.filter((r) => r.source === filter);
  }, [rules, filter]);

  const maxCount = Math.max(...filteredRules.map((r) => r.count));

  return (
    <DashboardCard
      title="Top Triggered Rules"
      headerAction={<SourceFilter value={filter} onChange={setFilter} />}
    >
      <div className="space-y-3 overflow-auto max-h-[200px] soc-scrollbar pr-2">
        {filteredRules.map((rule, i) => (
          <div key={i} className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm truncate pr-2">{rule.name}</span>
              <div className="flex items-center gap-2 shrink-0">
                <span className="font-mono text-sm text-primary">{rule.count}</span>
                <span className="px-1.5 py-0.5 text-[10px] rounded bg-muted text-muted-foreground">
                  {rule.source}
                </span>
              </div>
            </div>
            <div className="h-1 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full bg-primary/60 rounded-full transition-all"
                style={{ width: `${(rule.count / maxCount) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
