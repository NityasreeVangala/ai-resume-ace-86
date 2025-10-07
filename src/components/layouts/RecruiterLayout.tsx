import { ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, LayoutDashboard, Briefcase, Users, User, LogOut } from "lucide-react";

interface RecruiterLayoutProps {
  children: ReactNode;
}

const RecruiterLayout = ({ children }: RecruiterLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/recruiter/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/recruiter/jobs", icon: Briefcase, label: "My Jobs" },
    { path: "/recruiter/applicants", icon: Users, label: "Applicants" },
    { path: "/recruiter/profile", icon: User, label: "Profile" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              CampusCatalyst
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold">
                J
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-medium">John Doe</div>
                <div className="text-xs text-muted-foreground">HR Manager, Infosys</div>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => navigate("/login")}>
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Sidebar & Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 border-r min-h-[calc(100vh-4rem)] bg-card">
          <nav className="p-4 space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.path}
                  variant={isActive ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => navigate(item.path)}
                >
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.label}
                </Button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default RecruiterLayout;
