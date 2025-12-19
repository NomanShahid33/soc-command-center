import { mockData } from "@/data/mockData";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DetectionCard } from "@/components/dashboard/DetectionCard";
import { FirewallOverview } from "@/components/dashboard/FirewallOverview";
import { TopEndpointsTable } from "@/components/dashboard/TopEndpointsTable";
import { VulnerabilitiesOverview } from "@/components/dashboard/VulnerabilitiesOverview";
import { RecentEvents } from "@/components/dashboard/RecentEvents";
import { ActiveAttackers } from "@/components/dashboard/ActiveAttackers";
import { TopIntruders } from "@/components/dashboard/TopIntruders";
import { TopTriggeredRules } from "@/components/dashboard/TopTriggeredRules";
import { DetectionVolumeChart } from "@/components/dashboard/DetectionVolumeChart";
import { EndpointStatus } from "@/components/dashboard/EndpointStatus";
import { ComponentHealth } from "@/components/dashboard/ComponentHealth";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-6">
        {/* Component Health Status - Top Strip */}
        <div className="mb-6">
          <ComponentHealth components={mockData.componentHealth} />
        </div>

        {/* Main Grid - 12 columns */}
        <div className="grid grid-cols-12 gap-4">
          {/* TOP SUMMARY SECTION */}
          {/* EDR Detections */}
          <div className="col-span-12 lg:col-span-3">
            <DetectionCard
              title="EDR Detections"
              detections={mockData.edrDetections}
            />
          </div>

          {/* NDR Detections */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <DetectionCard
              title="NDR Detections"
              detections={mockData.ndrDetections}
            />
          </div>

          {/* WAF Detections */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <DetectionCard
              title="WAF Detections"
              detections={mockData.wafDetections}
            />
          </div>

          {/* Firewall Overview */}
          <div className="col-span-12 lg:col-span-3">
            <FirewallOverview
              totalDetections={mockData.firewallOverview.totalDetections}
              activeSessions={mockData.firewallOverview.activeSessions}
            />
          </div>

          {/* ANALYSIS & CONTEXT SECTION */}
          {/* Top Affected Endpoints */}
          <div className="col-span-12 lg:col-span-4">
            <TopEndpointsTable endpoints={mockData.topEndpoints} />
          </div>

          {/* Vulnerabilities Overview */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <VulnerabilitiesOverview data={mockData.vulnerabilities} />
          </div>

          {/* Endpoint Status */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <EndpointStatus
              connected={mockData.endpointStatus.connected}
              disconnected={mockData.endpointStatus.disconnected}
            />
          </div>

          {/* Recent Events - Live Feed */}
          <div className="col-span-12 lg:col-span-6">
            <RecentEvents events={mockData.recentEvents} />
          </div>

          {/* Active Attackers */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <ActiveAttackers
              total={mockData.activeAttackers.total}
              topIPs={mockData.activeAttackers.topIPs}
            />
          </div>

          {/* Top Intruders */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <TopIntruders intruders={mockData.topIntruders} />
          </div>

          {/* TREND & RULES SECTION */}
          {/* Detection Volume Chart */}
          <div className="col-span-12 lg:col-span-8">
            <DetectionVolumeChart data={mockData.detectionVolume} />
          </div>

          {/* Top Triggered Rules */}
          <div className="col-span-12 lg:col-span-4">
            <TopTriggeredRules rules={mockData.topTriggeredRules} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
