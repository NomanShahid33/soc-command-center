import { DashboardCard } from "./DashboardCard";

interface FirewallOverviewProps {
  totalDetections: number;
  activeSessions: number;
}

export function FirewallOverview({ totalDetections, activeSessions }: FirewallOverviewProps) {
  return (
    <DashboardCard title="Firewall Overview">
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col">
          <span className="stat-number text-foreground">{totalDetections.toLocaleString()}</span>
          <span className="text-xs text-muted-foreground uppercase tracking-wide">
            Total Detections
          </span>
        </div>
        <div className="flex flex-col">
          <span className="stat-number text-primary">{activeSessions.toLocaleString()}</span>
          <span className="text-xs text-muted-foreground uppercase tracking-wide">
            Active Sessions
          </span>
        </div>
      </div>
    </DashboardCard>
  );
}
