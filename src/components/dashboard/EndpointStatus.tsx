import { DashboardCard } from "./DashboardCard";
import { Monitor, MonitorOff } from "lucide-react";

interface EndpointStatusProps {
  connected: number;
  disconnected: number;
}

export function EndpointStatus({ connected, disconnected }: EndpointStatusProps) {
  const total = connected + disconnected;
  const connectedPercent = (connected / total) * 100;

  return (
    <DashboardCard title="Endpoint Status">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-status-healthy/10">
              <Monitor className="w-5 h-5 text-status-healthy" />
            </div>
            <div>
              <span className="stat-number text-status-healthy">{connected.toLocaleString()}</span>
              <p className="text-xs text-muted-foreground">Connected</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-status-error/10">
              <MonitorOff className="w-5 h-5 text-status-error" />
            </div>
            <div>
              <span className="stat-number text-status-error">{disconnected}</span>
              <p className="text-xs text-muted-foreground">Disconnected</p>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-1">
          <div className="flex h-2 rounded-full overflow-hidden bg-muted">
            <div
              className="bg-status-healthy transition-all"
              style={{ width: `${connectedPercent}%` }}
            />
            <div className="bg-status-error flex-1" />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{connectedPercent.toFixed(1)}% online</span>
            <span>Total: {total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}
