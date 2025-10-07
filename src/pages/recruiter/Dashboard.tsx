import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, CheckCircle, Clock } from "lucide-react";
import RecruiterLayout from "@/components/layouts/RecruiterLayout";

const RecruiterDashboard = () => {
  const stats = [
    { label: "Active Job Posts", value: "6", icon: Briefcase },
    { label: "Total Applications", value: "152", icon: Users },
    { label: "Hires Completed", value: "18", icon: CheckCircle },
    { label: "Pending Interviews", value: "12", icon: Clock },
  ];

  const jobListings = [
    {
      title: "Software Engineer",
      applicants: 42,
      status: "Active",
      postedOn: "01 Oct 2025"
    },
    {
      title: "Data Analyst",
      applicants: 25,
      status: "Closed",
      postedOn: "20 Sept 2025"
    },
    {
      title: "Frontend Developer",
      applicants: 38,
      status: "Active",
      postedOn: "15 Sept 2025"
    }
  ];

  return (
    <RecruiterLayout>
      <div className="space-y-6">
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">Welcome back, John 👋</h1>
          <p className="text-muted-foreground">
            HR Manager, Infosys • Here's your recruitment summary for this week
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
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Job Listings */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">My Job Listings</h2>
            <Button>Post New Job</Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 font-semibold">Job Title</th>
                  <th className="text-left p-4 font-semibold">Applicants</th>
                  <th className="text-left p-4 font-semibold">Status</th>
                  <th className="text-left p-4 font-semibold">Posted On</th>
                  <th className="text-left p-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {jobListings.map((job, index) => (
                  <tr key={index} className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-medium">{job.title}</td>
                    <td className="p-4">{job.applicants}</td>
                    <td className="p-4">
                      <Badge variant={job.status === "Active" ? "default" : "secondary"}>
                        {job.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-muted-foreground">{job.postedOn}</td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm">View Applicants</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </RecruiterLayout>
  );
};

export default RecruiterDashboard;
