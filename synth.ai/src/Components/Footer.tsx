import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-600 text-gray-700">
      <div className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {/* Features */}
          <div className="flex flex-col space-y-2">
            <h2 className="font-semibold text-lg">Features</h2>
            <a href="https://interviewer.ai/help/accurate-resume-scoring/">
              <span>Resume Scoring</span>
            </a>
            <a href="https://interviewer.ai/help/workmap-assessment-best-skills-assessment/">
              <span>WorkMap (Skill) Assessment</span>
            </a>
            <a href="https://interviewer.ai/help/what-is-interviewer-ais-video-intelligence/">
              <span>One-Way Video Interviews</span>
            </a>
            <a href="https://interviewer.ai/help/best-tips-for-exploring-talent-pool/">
              <span>Explore Talent Pool</span>
            </a>
            <a href="https://interviewer.ai/help/shortlist-candidates/">
              <span>Shortlist</span>
            </a>
            <a href="https://interviewer.ai/help/effortlessly-explore-insights-today/">
              <span>Explore Insights</span>
            </a>
          </div>

          {/* Compare */}
          <div className="flex flex-col space-y-2">
            <h2 className="font-semibold text-lg">Compare</h2>
            <a href="https://interviewer.ai/hirevue-alternative/">
              <span>Hirevue Vs Interviewer.AI</span>
            </a>
            <a href="https://interviewer.ai/vidcruiter-vs-interviewer-ai/">
              <span>Vidcruiter Vs Interviewer.AI</span>
            </a>
            <a href="https://interviewer.ai/sparkhire-vs-interviewer/">
              <span>Spark Hire Vs Interviewer.AI</span>
            </a>
            <a href="https://interviewer.ai/myinterview-vs-interviewer-ai/">
              <span>myInterview Vs Interviewer.AI</span>
            </a>
          </div>

          {/* Why choose us */}
          <div className="flex flex-col space-y-2">
            <h2 className="font-semibold text-lg">Why choose us?</h2>
            <a href="https://interviewer.ai/cost-effective/">
              <span>Cost Effective</span>
            </a>
            <a href="https://interviewer.ai/time-efficient/">
              <span>Time Efficient</span>
            </a>
            <a href="https://interviewer.ai/quality-hires/">
              <span>Quality Hires</span>
            </a>
            <a href="https://interviewer.ai/increase-diversity/">
              <span>Diversity Hiring</span>
            </a>
            <a href="https://interviewer.ai/schedule-demo/">
              <span>Schedule Demo</span>
            </a>
          </div>

          {/* Company */}
          <div className="flex flex-col space-y-2">
            <h2 className="font-semibold text-lg">Company</h2>
            <a href="https://interviewer.ai/about/">
              <span>About Us</span>
            </a>
            <a href="https://interviewer.ai/newsroom/">
              <span>Newsroom</span>
            </a>
            <a href="https://interviewer.ai/about/#team">
              <span>Team</span>
            </a>
            <a href="https://interviewer.ai/blogs">
              <span>Blogs</span>
            </a>
            <a href="https://careers.interviewer.ai/interviewer-ai-sg">
              <span>Careers</span>
            </a>
            <a href="https://interviewer.ai/contact/">
              <span>Contact Us</span>
            </a>
            <a href="https://careers.interviewer.ai/">
              <span>Companies Hiring</span>
            </a>
          </div>

          {/* Resources */}
          <div className="flex flex-col space-y-2">
            <h2 className="font-semibold text-lg">Resources</h2>
            <a href="https://interviewer.ai/how-it-works/">
              <span>How it works</span>
            </a>
            <a href="https://interviewer.ai/explainable-ai/">
              <span>The Science</span>
            </a>
            <a href="https://interviewer.ai/structured-interviews/">
              <span>Structured Interviews</span>
            </a>
            <a href="https://interviewer.ai/help-center/">
              <span>Help Center</span>
            </a>
            <a href="https://interviewer.ai/faq/">
              <span>FAQs</span>
            </a>
            <a href="https://interviewer.ai/whitepapers/">
              <span>White Papers</span>
            </a>
            <a href="https://resume.interviewer.ai/">
              <span>Resume Builder</span>
            </a>
          </div>

          {/* Legal */}
          <div className="flex flex-col space-y-2">
            <h2 className="font-semibold text-lg">Legal</h2>
            <a href="https://interviewer.ai/terms/privacy-policy/">
              <span>Privacy Policy</span>
            </a>
            <a href="https://interviewer.ai/terms/customer/">
              <span>Terms of Service</span>
            </a>
          </div>
        </div>
        <div className="container mx-auto text-center mt-8">
          <p>&copy; {new Date().getFullYear()} Developer Interview Prep</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
