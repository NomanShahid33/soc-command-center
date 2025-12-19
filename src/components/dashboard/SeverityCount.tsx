import { cn } from "@/lib/utils";

interface SeverityCountProps {
  severity: "critical" | "high" | "medium" | "low";
  count: number;
  size?: "sm" | "md" | "lg";
}

const severityLabels = {
  critical: "Critical",
  high: "High",
  medium: "Medium",
  low: "Low",
};

export function SeverityCount({ severity, count, size = "md" }: SeverityCountProps) {
  const sizeClasses = {
    sm: "stat-number-sm",
    md: "stat-number",
    lg: "stat-number-lg",
  };

  return (
    <div className="flex items-center gap-3">
      <div className={cn("severity-dot", `severity-${severity}`)} />
      <div className="flex flex-col">
        <span className={cn(sizeClasses[size], `text-severity-${severity}`)}>
          {count.toLocaleString()}
        </span>
        <span className="text-xs text-muted-foreground uppercase tracking-wide">
          {severityLabels[severity]}
        </span>
      </div>
    </div>
  );
}
