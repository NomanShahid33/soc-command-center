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
      
      <main className="container mx-auto px-4 py-4">
        {/* Component Health Status - Top Strip */}
        <div className="mb-4">
          <ComponentHealth components={mockData.componentHealth} />
        </div>

        {/* Main Grid - 12 columns */}
        <div className="grid grid-cols-12 gap-3">
          {/* TOP SUMMARY SECTION - Detection Cards */}
          <div className="col-span-6 lg:col-span-3">
            <DetectionCard title="EDR Detections" detections={mockData.edrDetections} />
          </div>
          <div className="col-span-6 lg:col-span-3">
            <DetectionCard title="NDR Detections" detections={mockData.ndrDetections} />
          </div>
          <div className="col-span-6 lg:col-span-3">
            <DetectionCard title="WAF Detections" detections={mockData.wafDetections} />
          </div>
          <div className="col-span-6 lg:col-span-3">
            <FirewallOverview
              totalDetections={mockData.firewallOverview.totalDetections}
              activeSessions={mockData.firewallOverview.activeSessions}
            />
          </div>

          {/* MIDDLE SECTION - Tables & Status */}
          <div className="col-span-12 lg:col-span-4">
            <TopEndpointsTable endpoints={mockData.topEndpoints} />
          </div>
          <div className="col-span-6 lg:col-span-2">
            <VulnerabilitiesOverview data={mockData.vulnerabilities} />
          </div>
          <div className="col-span-6 lg:col-span-2">
            <EndpointStatus
              connected={mockData.endpointStatus.connected}
              disconnected={mockData.endpointStatus.disconnected}
            />
          </div>
          <div className="col-span-12 lg:col-span-4 lg:row-span-2">
            <RecentEvents events={mockData.recentEvents} />
          </div>

          {/* THREAT SECTION - Attackers & Rules */}
          <div className="col-span-6 lg:col-span-2">
            <ActiveAttackers
              total={mockData.activeAttackers.total}
              topIPs={mockData.activeAttackers.topIPs}
            />
          </div>
          <div className="col-span-6 lg:col-span-2">
            <TopIntruders intruders={mockData.topIntruders} />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <TopTriggeredRules rules={mockData.topTriggeredRules} />
          </div>

          {/* BOTTOM SECTION - Chart */}
          <div className="col-span-12">
            <DetectionVolumeChart data={mockData.detectionVolume} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
