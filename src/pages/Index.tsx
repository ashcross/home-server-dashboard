import React, { useState } from "react";
import { serviceLinks } from "@/data/serviceLinks";
import ServiceCard from "@/components/ServiceCard";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = serviceLinks.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Home Server Dashboard</h1>
          <p className="text-lg text-muted-foreground">Access all your network services in one place</p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <Input
            type="search"
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;