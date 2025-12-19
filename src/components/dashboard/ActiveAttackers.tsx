import { useState, useMemo } from "react";
import { DashboardCard } from "./DashboardCard";
import { SourceFilter } from "./SourceFilter";
import { Source } from "@/data/mockData";
import { Shield, Globe } from "lucide-react";

interface AttackerIP {
  ip: string;
  country: string;
  events: number;
}

interface ActiveAttackersProps {
  total: number;
  topIPs: AttackerIP[];
}

export function ActiveAttackers({ total, topIPs }: ActiveAttackersProps) {
  const [filter, setFilter] = useState<Source>("All");

  return (
    <DashboardCard
      title="Active Attackers"
      headerAction={<SourceFilter value={filter} onChange={setFilter} />}
    >
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-severity-critical/10">
            <Shield className="w-6 h-6 text-severity-critical" />
          </div>
          <div>
            <span className="stat-number-lg text-severity-critical">{total}</span>
            <p className="text-xs text-muted-foreground uppercase">Active Threats</p>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Top Attacker IPs</p>
          <div className="space-y-1">
            {topIPs.slice(0, 5).map((attacker, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-muted/30 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-3 h-3 text-muted-foreground" />
                  <span className="font-mono text-sm">{attacker.ip}</span>
                  <span className="text-[10px] text-muted-foreground uppercase">
                    {attacker.country}
                  </span>
                </div>
                <span className="font-mono text-sm text-severity-high">{attacker.events}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}
