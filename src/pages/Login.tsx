import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock login - In real app, this would call an API
    if (email && password) {
      toast({
        title: "Login Successful",
        description: "Redirecting to dashboard...",
      });
      
      // Mock role-based redirect
      navigate("/student/dashboard");
    } else {
      toast({
        title: "Error",
        description: "Please enter email and password",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="auth-page min-h-screen flex items-center justify-center bg-gradient-to-br from-[#EDEDE9] via-[#84BABF]/20 to-[#EDEDE9] p-4">
      <Card className="w-full max-w-md p-8 animate-scale-in shadow-2xl border-2 border-[#84BABF]/30 transition-all duration-500 hover:shadow-3xl">
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#085558] to-[#0D6F73] flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-3">
              <GraduationCap className="h-7 w-7 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-[#085558] to-[#0D6F73] bg-clip-text text-transparent">
              CampusCatalyst
            </span>
          </div>
          <h1 className="text-2xl font-bold mb-2 text-[#06363D]">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="transition-all duration-300 focus:ring-2 focus:ring-[#0D6F73]"
              required
            />
          </div>

          <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="transition-all duration-300 focus:ring-2 focus:ring-[#0D6F73]"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="rounded transition-transform duration-200 group-hover:scale-110" />
              <span className="group-hover:text-[#0D6F73] transition-colors">Remember Me</span>
            </label>
            <a href="#" className="text-[#085558] hover:text-[#0D6F73] transition-colors hover:underline">Forgot Password?</a>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-[#085558] to-[#0D6F73] hover:from-[#06363D] hover:to-[#085558] transition-all duration-300 hover:scale-105 hover:shadow-lg animate-slide-up" 
            size="lg"
            style={{ animationDelay: '0.4s' }}
          >
            Sign In
          </Button>

          <p className="text-center text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-[#085558] hover:text-[#0D6F73] hover:underline font-medium transition-all duration-300 hover:scale-105 inline-block"
            >
              Register here
            </button>
          </p>

          <p className="text-xs text-center text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </form>
      </Card>
    </div>
  );
};

export default Login;
