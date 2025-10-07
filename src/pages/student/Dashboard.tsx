import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Clock, 
  CheckCircle, 
  Eye,
  MapPin,
  DollarSign,
  Calendar,
  Bell
} from "lucide-react";
import StudentLayout from "@/components/layouts/StudentLayout";

const StudentDashboard = () => {
  const stats = [
    { label: "Jobs Applied", value: "12", change: "+3 this week", icon: Briefcase },
    { label: "Pending Interviews", value: "3", change: "2 this week", icon: Clock },
    { label: "Offers Received", value: "2", change: "+1 new offer", icon: CheckCircle },
    { label: "Profile Views", value: "45", change: "+12 this week", icon: Eye },
  ];

  const recommendedJobs = [
    {
      title: "Frontend Developer",
      company: "Google",
      location: "Bangalore, India",
      salary: "₹8-12 LPA",
      type: "Full-time",
      posted: "2 days ago"
    },
    {
      title: "Backend Engineer",
      company: "Microsoft",
      location: "Hyderabad, India",
      salary: "₹10-15 LPA",
      type: "Full-time",
      posted: "3 days ago"
    },
    {
      title: "Data Scientist",
      company: "Amazon",
      location: "Mumbai, India",
      salary: "₹12-18 LPA",
      type: "Full-time",
      posted: "5 days ago"
    }
  ];

  const notifications = [
    {
      icon: Calendar,
      title: "Interview Scheduled",
      message: "Your interview with TCS is scheduled on 10 Oct at 2:00 PM",
      time: "2 hours ago"
    },
    {
      icon: Briefcase,
      title: "New Job Posted",
      message: "Google posted a new Software Intern position",
      time: "5 hours ago"
    },
    {
      icon: CheckCircle,
      title: "Application Update",
      message: "Your application for Frontend Developer at Wipro is under review",
      time: "1 day ago"
    }
  ];

  return (
    <StudentLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">Hi Nitya 👋</h1>
          <p className="text-muted-foreground">
            Welcome back to CampusCatalyst! Here's what's happening with your job applications today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-up">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
              <div className="text-xs text-accent">{stat.change}</div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recommended Jobs */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Recommended for You</h2>
              <p className="text-muted-foreground mb-6">Based on your profile and preferences</p>
              
              <div className="space-y-4">
                {recommendedJobs.map((job, index) => (
                  <Card key={index} className="p-4 hover:shadow-md transition-all duration-300 border-2 hover:border-primary/50">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-2">
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {job.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {job.salary}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="secondary">{job.type}</Badge>
                          <Badge variant="outline">{job.posted}</Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Details</Button>
                        <Button size="sm">Apply Now</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </div>

          {/* Recent Notifications */}
          <div>
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Recent Notifications
              </h2>
              
              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <div key={index} className="pb-4 border-b last:border-0">
                    <div className="flex gap-3">
                      <div className="bg-muted rounded-full p-2 h-fit">
                        <notification.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm mb-1">{notification.title}</h4>
                        <p className="text-xs text-muted-foreground mb-1">{notification.message}</p>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default StudentDashboard;
