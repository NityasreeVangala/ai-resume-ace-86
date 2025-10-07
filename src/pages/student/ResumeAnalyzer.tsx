import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  AlertCircle,
  TrendingUp,
  Target,
  Lightbulb
} from "lucide-react";
import StudentLayout from "@/components/layouts/StudentLayout";
import { useToast } from "@/hooks/use-toast";

interface AnalysisResult {
  atsScore: number;
  overallScore: number;
  strengths: string[];
  improvements: string[];
  keywordMatch: number;
  formatting: number;
  recommendations: string[];
}

const ResumeAnalyzer = () => {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      // Validate file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      
      if (!allowedTypes.includes(selectedFile.type)) {
        toast({
          title: "Invalid File Type",
          description: "Please upload a PDF or DOC/DOCX file",
          variant: "destructive",
        });
        return;
      }
      
      setFile(selectedFile);
      toast({
        title: "File Selected",
        description: `${selectedFile.name} is ready for analysis`,
      });
    }
  };

  const analyzeResume = async () => {
    if (!file) {
      toast({
        title: "No File Selected",
        description: "Please upload a resume first",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);

    // Simulate AI analysis - In production, this would call an AI API
    setTimeout(() => {
      const mockResult: AnalysisResult = {
        atsScore: 78,
        overallScore: 82,
        keywordMatch: 75,
        formatting: 90,
        strengths: [
          "Clear and professional formatting",
          "Strong technical skills section",
          "Quantifiable achievements in work experience",
          "Relevant certifications included",
          "Well-structured education section"
        ],
        improvements: [
          "Add more industry-specific keywords",
          "Include a professional summary at the top",
          "Expand on project descriptions with measurable outcomes",
          "Add relevant soft skills",
          "Include links to portfolio or GitHub profile"
        ],
        recommendations: [
          "Optimize for ATS by using standard section headings",
          "Add keywords from job descriptions you're targeting",
          "Keep formatting simple - avoid tables and complex layouts",
          "Use action verbs to start each bullet point",
          "Tailor your resume for each application"
        ]
      };
      
      setAnalysisResult(mockResult);
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis Complete!",
        description: "Your resume has been analyzed successfully",
      });
    }, 3000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return "bg-green-100";
    if (score >= 60) return "bg-yellow-100";
    return "bg-red-100";
  };

  return (
    <StudentLayout>
      <div className="space-y-6">
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">AI Resume Analyzer</h1>
          <p className="text-muted-foreground">
            Get your ATS score and detailed analysis to improve your resume
          </p>
        </div>

        {/* Upload Section */}
        <Card className="p-8 animate-slide-up">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Upload Your Resume</h2>
            <p className="text-muted-foreground">Get instant ATS score and detailed analysis</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <input
                type="file"
                id="resume-upload"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
              <label htmlFor="resume-upload" className="cursor-pointer">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-sm text-muted-foreground mb-2">
                  Drag and drop or click to upload
                </p>
                <p className="text-xs text-muted-foreground">
                  Supported formats: PDF, DOC, DOCX (Max 5MB)
                </p>
              </label>
            </div>

            {file && (
              <div className="mt-4 p-4 bg-muted rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {(file.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setFile(null)}
                >
                  Remove
                </Button>
              </div>
            )}

            <Button
              className="w-full mt-6"
              size="lg"
              onClick={analyzeResume}
              disabled={!file || isAnalyzing}
            >
              {isAnalyzing ? "Analyzing..." : "Analyze Resume"}
            </Button>
          </div>
        </Card>

        {/* Analysis Results */}
        {analysisResult && (
          <div className="space-y-6 animate-fade-in">
            {/* Score Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">ATS Score</h3>
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div className={`text-4xl font-bold mb-2 ${getScoreColor(analysisResult.atsScore)}`}>
                  {analysisResult.atsScore}%
                </div>
                <Progress value={analysisResult.atsScore} className="h-2" />
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Overall Score</h3>
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div className={`text-4xl font-bold mb-2 ${getScoreColor(analysisResult.overallScore)}`}>
                  {analysisResult.overallScore}%
                </div>
                <Progress value={analysisResult.overallScore} className="h-2" />
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Keyword Match</h3>
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className={`text-4xl font-bold mb-2 ${getScoreColor(analysisResult.keywordMatch)}`}>
                  {analysisResult.keywordMatch}%
                </div>
                <Progress value={analysisResult.keywordMatch} className="h-2" />
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Formatting</h3>
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div className={`text-4xl font-bold mb-2 ${getScoreColor(analysisResult.formatting)}`}>
                  {analysisResult.formatting}%
                </div>
                <Progress value={analysisResult.formatting} className="h-2" />
              </Card>
            </div>

            {/* Strengths & Improvements */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-bold">Strengths</h3>
                </div>
                <ul className="space-y-2">
                  {analysisResult.strengths.map((strength, index) => (
                    <li key={index} className="flex gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="h-6 w-6 text-yellow-600" />
                  <h3 className="text-xl font-bold">Areas for Improvement</h3>
                </div>
                <ul className="space-y-2">
                  {analysisResult.improvements.map((improvement, index) => (
                    <li key={index} className="flex gap-2 text-sm">
                      <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>{improvement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Recommendations */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">AI Recommendations</h3>
              </div>
              <div className="space-y-3">
                {analysisResult.recommendations.map((recommendation, index) => (
                  <div key={index} className="flex gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className="bg-primary/10 rounded-full px-3 py-1 h-fit">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                    <p className="text-sm flex-1">{recommendation}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                onClick={() => {
                  setFile(null);
                  setAnalysisResult(null);
                }}
              >
                Analyze Another Resume
              </Button>
              <Button variant="outline">Download Report</Button>
            </div>
          </div>
        )}
      </div>
    </StudentLayout>
  );
};

export default ResumeAnalyzer;
