import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Upload } from "lucide-react";
import StudentLayout from "@/components/layouts/StudentLayout";

const Profile = () => {
  return (
    <StudentLayout>
      <div className="space-y-6">
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">My Profile</h1>
          <p className="text-muted-foreground">
            Manage your personal information and resume
          </p>
        </div>

        {/* Profile Completion */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Profile Completion</h3>
            <span className="text-2xl font-bold text-primary">80%</span>
          </div>
          <Progress value={80} className="h-2 mb-2" />
          <p className="text-sm text-muted-foreground">
            Add more details to increase visibility
          </p>
        </Card>

        {/* Personal Information */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Personal Information</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" defaultValue="Nitya" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" defaultValue="Sharma" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="nitya@example.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" defaultValue="+91 98765 43210" />
            </div>
          </div>
        </Card>

        {/* Education */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Education</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="college">College/University</Label>
              <Input id="college" defaultValue="XYZ Institute of Technology" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="branch">Branch</Label>
              <Input id="branch" defaultValue="Computer Science & Engineering" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="gradYear">Graduation Year</Label>
              <Input id="gradYear" defaultValue="2026" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cgpa">CGPA/Percentage</Label>
              <Input id="cgpa" defaultValue="8.5" />
            </div>
          </div>
        </Card>

        {/* Resume Upload */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Upload Photo</h2>
          
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-hero flex items-center justify-center text-white text-3xl font-bold">
              N
            </div>
            
            <div>
              <Button variant="outline">
                <Upload className="h-4 w-4 mr-2" />
                Upload Photo
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                JPG, PNG or GIF (Max 2MB)
              </p>
            </div>
          </div>
        </Card>

        {/* Resume */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Resume</h2>
          
          <div className="flex items-center gap-4">
            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Upload Resume
            </Button>
            <Button variant="ghost">Download Current Resume</Button>
          </div>
        </Card>

        {/* Save Button */}
        <div className="flex gap-4">
          <Button size="lg">Save Changes</Button>
          <Button variant="outline" size="lg">Cancel</Button>
        </div>
      </div>
    </StudentLayout>
  );
};

export default Profile;
