import { useState } from "react";
import { DashboardCard } from "./DashboardCard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { cn } from "@/lib/utils";

interface DataPoint {
  hour: string;
  edr: number;
  ndr: number;
  waf: number;
  firewall: number;
}

interface DetectionVolumeChartProps {
  data: DataPoint[];
}

const sources = [
  { key: "edr", label: "EDR", color: "hsl(190, 95%, 50%)" },
  { key: "ndr", label: "NDR", color: "hsl(270, 80%, 65%)" },
  { key: "waf", label: "WAF", color: "hsl(45, 93%, 50%)" },
  { key: "firewall", label: "Firewall", color: "hsl(0, 84%, 60%)" },
];

export function DetectionVolumeChart({ data }: DetectionVolumeChartProps) {
  const [visibleSources, setVisibleSources] = useState<Record<string, boolean>>({
    edr: true,
    ndr: true,
    waf: true,
    firewall: true,
  });

  const toggleSource = (key: string) => {
    setVisibleSources((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <DashboardCard title="Detection Volume (Last 24 Hours)" className="col-span-full">
      <div className="flex gap-4 mb-4">
        {sources.map((source) => (
          <button
            key={source.key}
            onClick={() => toggleSource(source.key)}
            className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all",
              visibleSources[source.key]
                ? "bg-muted text-foreground"
                : "bg-transparent text-muted-foreground hover:bg-muted/50"
            )}
          >
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{
                backgroundColor: visibleSources[source.key] ? source.color : "hsl(var(--muted-foreground))",
              }}
            />
            {source.label}
          </button>
        ))}
      </div>

      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis
              dataKey="hour"
              stroke="hsl(var(--muted-foreground))"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              interval={2}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              width={30}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                fontSize: "12px",
              }}
              labelStyle={{ color: "hsl(var(--foreground))" }}
            />
            {sources.map((source) =>
              visibleSources[source.key] ? (
                <Line
                  key={source.key}
                  type="monotone"
                  dataKey={source.key}
                  stroke={source.color}
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4, strokeWidth: 0 }}
                />
              ) : null
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </DashboardCard>
  );
}
