// Mock data for SOC Dashboard
export type Source = "All" | "EDR" | "NDR" | "WAF" | "Firewall" | "VAS";
export type Severity = "critical" | "high" | "medium" | "low";
export type ComponentStatus = "healthy" | "error" | "warning";

export const mockData = {
  // EDR Detections
  edrDetections: {
    critical: 12,
    high: 47,
    medium: 156,
    low: 289,
  },
  
  // NDR Detections
  ndrDetections: {
    high: 23,
    medium: 89,
    low: 412,
  },
  
  // WAF Detections
  wafDetections: {
    critical: 3,
    high: 18,
    medium: 67,
    low: 234,
  },
  
  // Firewall Overview
  firewallOverview: {
    totalDetections: 1847,
    activeSessions: 12453,
  },
  
  // Top Affected Endpoints
  topEndpoints: [
    { name: "WKS-FIN-0234", count: 47, source: "EDR" },
    { name: "SRV-DB-PROD-01", count: 34, source: "NDR" },
    { name: "WKS-HR-0156", count: 28, source: "EDR" },
    { name: "API-GW-PROD", count: 23, source: "WAF" },
    { name: "WKS-DEV-0089", count: 19, source: "EDR" },
    { name: "SRV-WEB-PROD-03", count: 17, source: "WAF" },
    { name: "WKS-SALES-0312", count: 15, source: "NDR" },
    { name: "SRV-MAIL-01", count: 12, source: "EDR" },
  ],
  
  // Vulnerabilities
  vulnerabilities: {
    critical: 8,
    high: 34,
    medium: 127,
    sources: {
      edr: { critical: 5, high: 21, medium: 78 },
      vas: { critical: 3, high: 13, medium: 49 },
    },
  },
  
  // Recent Events
  recentEvents: [
    { id: 1, timestamp: "14:23:45", source: "EDR", severity: "critical" as Severity, description: "Ransomware behavior detected on WKS-FIN-0234" },
    { id: 2, timestamp: "14:22:31", source: "WAF", severity: "high" as Severity, description: "SQL injection attempt blocked - API endpoint /users" },
    { id: 3, timestamp: "14:21:18", source: "NDR", severity: "medium" as Severity, description: "Unusual outbound traffic pattern from SRV-DB-PROD-01" },
    { id: 4, timestamp: "14:20:55", source: "Firewall", severity: "high" as Severity, description: "Port scan detected from 185.234.72.19" },
    { id: 5, timestamp: "14:19:42", source: "EDR", severity: "low" as Severity, description: "Potentially unwanted application blocked" },
    { id: 6, timestamp: "14:18:29", source: "WAF", severity: "medium" as Severity, description: "XSS attempt blocked - /search endpoint" },
    { id: 7, timestamp: "14:17:16", source: "NDR", severity: "high" as Severity, description: "C2 beacon communication detected" },
    { id: 8, timestamp: "14:16:03", source: "EDR", severity: "medium" as Severity, description: "Suspicious PowerShell execution" },
    { id: 9, timestamp: "14:14:50", source: "Firewall", severity: "low" as Severity, description: "Blocked connection to known malicious IP" },
    { id: 10, timestamp: "14:13:37", source: "WAF", severity: "critical" as Severity, description: "RCE attempt detected - /admin/upload" },
  ],
  
  // Active Attackers
  activeAttackers: {
    total: 23,
    topIPs: [
      { ip: "185.234.72.19", country: "RU", events: 156 },
      { ip: "45.227.255.190", country: "BR", events: 89 },
      { ip: "103.151.124.33", country: "CN", events: 67 },
      { ip: "91.240.118.172", country: "UA", events: 45 },
      { ip: "194.26.29.113", country: "NL", events: 34 },
    ],
  },
  
  // Top Intruders
  topIntruders: [
    { ip: "185.234.72.19", eventCount: 156, source: "Firewall" },
    { ip: "45.227.255.190", eventCount: 89, source: "WAF" },
    { ip: "103.151.124.33", eventCount: 67, source: "NDR" },
    { ip: "91.240.118.172", eventCount: 45, source: "EDR" },
    { ip: "194.26.29.113", eventCount: 34, source: "WAF" },
    { ip: "23.94.168.201", eventCount: 28, source: "Firewall" },
  ],
  
  // Top Triggered Rules
  topTriggeredRules: [
    { name: "Suspicious Outbound Connection", count: 234, source: "Firewall" },
    { name: "Brute Force Login Attempt", count: 189, source: "EDR" },
    { name: "SQL Injection Pattern", count: 156, source: "WAF" },
    { name: "Lateral Movement Detected", count: 123, source: "NDR" },
    { name: "Malicious File Download", count: 98, source: "EDR" },
    { name: "DDoS Traffic Pattern", count: 87, source: "WAF" },
    { name: "Data Exfiltration Attempt", count: 76, source: "NDR" },
  ],
  
  // Detection Volume (24 hours, hourly)
  detectionVolume: Array.from({ length: 24 }, (_, i) => ({
    hour: `${i.toString().padStart(2, '0')}:00`,
    edr: Math.floor(Math.random() * 50) + 10,
    ndr: Math.floor(Math.random() * 40) + 5,
    waf: Math.floor(Math.random() * 35) + 8,
    firewall: Math.floor(Math.random() * 60) + 15,
  })),
  
  // Endpoint Status
  endpointStatus: {
    connected: 1247,
    disconnected: 23,
  },
  
  // Component Health
  componentHealth: [
    { name: "SIEM", status: "healthy" as ComponentStatus, lastHeartbeat: "2 sec ago" },
    { name: "EDR", status: "healthy" as ComponentStatus, lastHeartbeat: "5 sec ago" },
    { name: "NDR", status: "healthy" as ComponentStatus, lastHeartbeat: "3 sec ago" },
    { name: "WAF", status: "healthy" as ComponentStatus, lastHeartbeat: "1 sec ago" },
    { name: "Firewall", status: "error" as ComponentStatus, lastHeartbeat: "5 min ago" },
  ],
};
