import React from "react";
import { ServiceLink } from "@/data/serviceLinks";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  service: ServiceLink;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = service.icon;
  
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Icon className="h-6 w-6 text-primary" />
        <h3 className="text-lg font-semibold">{service.title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
        <div className="space-y-2">
          <a
            href={`http://${service.ipAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-primary hover:underline"
          >
            IP: {service.ipAddress}
          </a>
          <a
            href={`http://${service.localDns}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-primary hover:underline"
          >
            DNS: {service.localDns}
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;