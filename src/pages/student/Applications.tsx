import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";
import StudentLayout from "@/components/layouts/StudentLayout";

const Applications = () => {
  const applications = [
    {
      jobTitle: "Software Engineer",
      company: "Infosys",
      status: "Interview",
      appliedDate: "12 Sept 2025",
      statusColor: "bg-blue-100 text-blue-700"
    },
    {
      jobTitle: "Frontend Developer",
      company: "TCS",
      status: "Pending",
      appliedDate: "10 Sept 2025",
      statusColor: "bg-yellow-100 text-yellow-700"
    },
    {
      jobTitle: "Data Analyst",
      company: "Wipro",
      status: "Selected",
      appliedDate: "8 Sept 2025",
      statusColor: "bg-green-100 text-green-700"
    },
    {
      jobTitle: "Backend Developer",
      company: "Accenture",
      status: "Rejected",
      appliedDate: "5 Sept 2025",
      statusColor: "bg-red-100 text-red-700"
    },
    {
      jobTitle: "Full Stack Developer",
      company: "Google",
      status: "Pending",
      appliedDate: "3 Sept 2025",
      statusColor: "bg-yellow-100 text-yellow-700"
    }
  ];

  return (
    <StudentLayout>
      <div className="space-y-6">
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">My Applications</h1>
          <p className="text-muted-foreground">
            Track all your job applications in one place
          </p>
        </div>

        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 font-semibold">JOB TITLE</th>
                  <th className="text-left p-4 font-semibold">COMPANY</th>
                  <th className="text-left p-4 font-semibold">STATUS</th>
                  <th className="text-left p-4 font-semibold">APPLIED DATE</th>
                  <th className="text-left p-4 font-semibold">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {applications.map((app, index) => (
                  <tr key={index} className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-medium">{app.jobTitle}</td>
                    <td className="p-4">{app.company}</td>
                    <td className="p-4">
                      <Badge className={app.statusColor}>
                        {app.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-muted-foreground">{app.appliedDate}</td>
                    <td className="p-4">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </StudentLayout>
  );
};

export default Applications;
