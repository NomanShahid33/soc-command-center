import { Shield, Bell, Settings, User, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export function DashboardHeader() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 glow-primary">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground tracking-tight">
                Security Operations Center
              </h1>
              <p className="text-xs text-muted-foreground">
                Command Center Overview
              </p>
            </div>
          </div>

          {/* Center - Live indicator */}
          <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50">
            <div className="w-2 h-2 rounded-full bg-status-healthy animate-pulse-glow" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Live
            </span>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Time display */}
            <div className="hidden sm:flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="font-mono text-muted-foreground">
                {time.toLocaleTimeString('en-US', { hour12: false })}
              </span>
              <span className="text-muted-foreground/60">
                {time.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </div>

            <div className="h-6 w-px bg-border hidden sm:block" />

            {/* Action buttons */}
            <div className="flex items-center gap-1">
              <button className="p-2 rounded-lg hover:bg-muted transition-colors relative">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-severity-critical" />
              </button>
              <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                <Settings className="w-5 h-5 text-muted-foreground" />
              </button>
              <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                <User className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
