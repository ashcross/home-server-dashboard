import { Server, Globe, Network } from "lucide-react";

export interface ServiceLink {
  id: string;
  title: string;
  description: string;
  ipAddress: string;
  localDns: string;
  icon: typeof Server | typeof Globe | typeof Network;
}

export const serviceLinks: ServiceLink[] = [
  {
    id: "1",
    title: "Plex Media Server",
    description: "Stream your media collection",
    ipAddress: "192.168.1.100:32400",
    localDns: "plex.home.arpa",
    icon: Server,
  },
  {
    id: "2",
    title: "Home Assistant",
    description: "Home automation dashboard",
    ipAddress: "192.168.1.100:8123",
    localDns: "homeassistant.home.arpa",
    icon: Globe,
  },
  {
    id: "3",
    title: "Network Storage",
    description: "Access network storage",
    ipAddress: "192.168.1.100:5000",
    localDns: "nas.home.arpa",
    icon: Network,
  },
  // Add more services as needed
];