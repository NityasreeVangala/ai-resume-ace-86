import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, DollarSign, Calendar, Search } from "lucide-react";
import StudentLayout from "@/components/layouts/StudentLayout";

const JobListings = () => {
  const jobs = [
    {
      title: "Software Engineer",
      company: "Google",
      location: "Bangalore, India",
      salary: "₹15-20 LPA",
      type: "Full-time",
      posted: "1 day ago",
      description: "Join our engineering team to build scalable solutions"
    },
    {
      title: "Frontend Developer",
      company: "Microsoft",
      location: "Hyderabad, India",
      salary: "₹10-15 LPA",
      type: "Full-time",
      posted: "2 days ago",
      description: "Create beautiful user interfaces with modern technologies"
    },
    {
      title: "Data Analyst",
      company: "Amazon",
      location: "Mumbai, India",
      salary: "₹8-12 LPA",
      type: "Full-time",
      posted: "3 days ago",
      description: "Analyze data and provide insights to drive business decisions"
    },
    {
      title: "Backend Developer",
      company: "Infosys",
      location: "Pune, India",
      salary: "₹6-10 LPA",
      type: "Full-time",
      posted: "4 days ago",
      description: "Build robust backend systems and APIs"
    },
    {
      title: "Full Stack Developer",
      company: "TCS",
      location: "Chennai, India",
      salary: "₹7-12 LPA",
      type: "Full-time",
      posted: "5 days ago",
      description: "Work on end-to-end application development"
    }
  ];

  return (
    <StudentLayout>
      <div className="space-y-6">
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">Job Listings</h1>
          <p className="text-muted-foreground">
            Discover opportunities that match your skills and interests
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="p-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search jobs by title, company, or keywords..."
                className="pl-10"
              />
            </div>
            <Button>Search</Button>
          </div>
        </Card>

        {/* Job Cards */}
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 animate-slide-up border-2 hover:border-primary/50" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                      <p className="text-lg text-muted-foreground">{job.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {job.salary}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {job.posted}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {job.description}
                  </p>
                  
                  <div className="flex gap-2">
                    <Badge variant="secondary">{job.type}</Badge>
                  </div>
                </div>
                
                <div className="flex md:flex-col gap-2">
                  <Button className="w-full md:w-auto">Apply Now</Button>
                  <Button variant="outline" className="w-full md:w-auto">Details</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </StudentLayout>
  );
};

export default JobListings;
