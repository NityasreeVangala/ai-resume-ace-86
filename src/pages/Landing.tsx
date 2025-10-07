import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  GraduationCap, 
  Briefcase, 
  Building2, 
  Brain, 
  Target, 
  TrendingUp,
  FileText,
  Users,
  BarChart3,
  CheckCircle
} from "lucide-react";
import heroImage1 from "@/assets/hero-professional-1.jpg";
import heroImage2 from "@/assets/hero-professional-2.jpg";
import heroImage3 from "@/assets/hero-professional-3.jpg";

const Landing = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [heroImage1, heroImage2, heroImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI Resume Analyzer",
      description: "Get intelligent feedback with ATS score and optimization suggestions"
    },
    {
      icon: Target,
      title: "Smart Job Matching",
      description: "AI-powered recommendations based on your skills and preferences"
    },
    {
      icon: TrendingUp,
      title: "Application Tracking",
      description: "Track your applications and interview progress in real-time"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into placement and engagement metrics"
    }
  ];

  const stats = [
    { value: "10k+", label: "Students" },
    { value: "500+", label: "Companies" },
    { value: "95%", label: "Success Rate" }
  ];

  const roles = [
    {
      icon: GraduationCap,
      title: "For Students",
      description: "Discover your perfect career path with AI-powered resume optimization and personalized job recommendations",
      features: ["Resume Analysis", "Job Recommendations", "Interview Prep", "Application Tracking"]
    },
    {
      icon: Briefcase,
      title: "For Recruiters",
      description: "Find top talent efficiently with advanced filtering and AI-powered candidate matching",
      features: ["Smart Filtering", "Bulk Messaging", "Candidate Analytics", "Streamlined Hiring"]
    },
    {
      icon: Building2,
      title: "For Placement Cells",
      description: "Manage campus recruitment seamlessly with centralized dashboards and automated workflows",
      features: ["Student Management", "Analytics Dashboard", "Placement Reports", "Workflow Automation"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 animate-slide-in-left">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              CampusCatalyst
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-6 animate-fade-in">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-105">Features</a>
            <a href="#roles" className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-105">Solutions</a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-105">How it Works</a>
          </div>

          <div className="flex items-center gap-3 animate-slide-in-right">
            <Button variant="ghost" onClick={() => navigate("/login")} className="transition-all duration-300 hover:scale-105">Sign In</Button>
            <Button onClick={() => navigate("/register")} className="transition-all duration-300 hover:scale-105">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        
        {/* Floating Professional Images */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-1000 ${
                index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{
                top: index === 0 ? '10%' : index === 1 ? '60%' : '30%',
                right: index === 0 ? '5%' : index === 1 ? '10%' : '8%',
                width: index === 1 ? '280px' : '250px',
              }}
            >
              <div className="relative animate-float-delayed">
                <img
                  src={img}
                  alt={`Professional ${index + 1}`}
                  className="rounded-2xl shadow-2xl border-4 border-white/20"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent animate-slide-up">
              Embark On The Journey Of A Lifetime
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Dream Far. Achieve More.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Unlock your career potential with AI-powered resume analysis, curated job listings, and personalized career dashboards. Your future starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg" onClick={() => navigate("/register")}>
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Learn More
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 transition-all duration-300 hover:scale-110">
                  <CheckCircle className="h-4 w-4 text-accent animate-pulse-glow" />
                  <span><strong className="text-foreground">{stat.value}</strong> {stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Three Communities Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Three Communities</h2>
          <p className="text-lg text-muted-foreground">
            Empowering Students discover opportunities • Recruiters find talent • Placement cells manage success
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to accelerate your campus placement journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all duration-500 animate-slide-up border-2 hover:border-primary/50 hover:-translate-y-2 group" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="h-12 w-12 text-primary mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Simple steps to accelerate your career</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: 1, title: "Upload Resume", desc: "Get your resume analyzed by our AI" },
              { step: 2, title: "Get ATS Score", desc: "Receive detailed analysis and improvements" },
              { step: 3, title: "Apply & Track", desc: "Apply to jobs and monitor progress" }
            ].map((item, index) => (
              <div key={index} className="text-center animate-scale-in group" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role-specific Solutions */}
      <section id="roles" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-2xl transition-all duration-500 animate-scale-in hover:-translate-y-3 group border-2 hover:border-primary/50" 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <role.icon className="h-12 w-12 text-primary mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                <h3 className="text-2xl font-bold mb-3">{role.title}</h3>
                <p className="text-muted-foreground mb-6">{role.description}</p>
                <ul className="space-y-2">
                  {role.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm transition-all duration-300 hover:translate-x-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 bg-white rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-white rounded-full animate-pulse-glow"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 opacity-90 animate-slide-up">Join thousands of students and recruiters already using CampusCatalyst</p>
          <Button 
            size="lg" 
            variant="secondary" 
            onClick={() => navigate("/register")}
            className="transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-scale-in"
          >
            Get Started Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-6 w-6" />
                <span className="text-xl font-bold">CampusCatalyst</span>
              </div>
              <p className="text-sm opacity-80">
                Empowering students to achieve their career dreams through AI-powered tools and insights.
              </p>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#features" className="hover:opacity-100 transition-opacity">Features</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Pricing</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Blog</a></li>
              </ul>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Help Center</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">FAQ</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a></li>
              </ul>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <p className="text-sm opacity-80 mb-2">support@campuscatalyst.com</p>
              <p className="text-sm opacity-80 mb-2">Phone: +1 (555) 123-4567</p>
              <p className="text-sm opacity-80">123 Campus Drive, CA 94000</p>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
            © 2025 CampusCatalyst. All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
