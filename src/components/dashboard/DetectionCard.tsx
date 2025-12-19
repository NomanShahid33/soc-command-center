import { DashboardCard } from "./DashboardCard";
import { SeverityCount } from "./SeverityCount";

interface DetectionCardProps {
  title: string;
  detections: {
    critical?: number;
    high?: number;
    medium?: number;
    low?: number;
  };
}

export function DetectionCard({ title, detections }: DetectionCardProps) {
  return (
    <DashboardCard title={title}>
      <div className="grid grid-cols-2 gap-4">
        {detections.critical !== undefined && (
          <SeverityCount severity="critical" count={detections.critical} />
        )}
        {detections.high !== undefined && (
          <SeverityCount severity="high" count={detections.high} />
        )}
        {detections.medium !== undefined && (
          <SeverityCount severity="medium" count={detections.medium} />
        )}
        {detections.low !== undefined && (
          <SeverityCount severity="low" count={detections.low} />
        )}
      </div>
    </DashboardCard>
  );
}
