import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  children: ReactNode;
  className?: string;
  headerAction?: ReactNode;
  variant?: "default" | "elevated";
}

export function DashboardCard({ 
  title, 
  children, 
  className, 
  headerAction,
  variant = "default" 
}: DashboardCardProps) {
  return (
    <div className={cn(
      variant === "elevated" ? "soc-card-elevated" : "soc-card",
      "flex flex-col",
      className
    )}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          {title}
        </h3>
        {headerAction}
      </div>
      {children}
    </div>
  );
}
