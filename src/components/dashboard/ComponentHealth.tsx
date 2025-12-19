import { cn } from "@/lib/utils";
import { ComponentStatus } from "@/data/mockData";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Component {
  name: string;
  status: ComponentStatus;
  lastHeartbeat: string;
}

interface ComponentHealthProps {
  components: Component[];
}

export function ComponentHealth({ components }: ComponentHealthProps) {
  return (
    <div className="soc-card">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Component Health
        </h3>
        <div className="flex items-center gap-4">
          {components.map((component) => (
            <Tooltip key={component.name}>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2 cursor-default">
                  <div
                    className={cn(
                      "status-dot",
                      component.status === "healthy" && "status-healthy",
                      component.status === "error" && "status-error",
                      component.status === "warning" && "bg-status-warning"
                    )}
                  />
                  <span className="text-sm text-foreground">{component.name}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="bg-popover border-border">
                <p className="text-xs">
                  Last heartbeat: <span className="font-mono">{component.lastHeartbeat}</span>
                </p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
}
