import React from "react";

// Define prop types for the FeatureCard component
interface FeatureCardProps {
  title: string;
  description: string;
}

// Create a FeatureCard component
const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const Features: React.FC = () => {
  // Define an array of features with titles and meaningful descriptions
  const features = [
    {
      title: "Resume Scoring",
      description:
        "Automatically evaluate and score resumes to identify top candidates quickly and efficiently.",
    },
    {
      title: "WorkMap (Skill) Assessment",
      description:
        "Assess candidates' skills and competencies using WorkMap, our advanced skill assessment tool.",
    },
    {
      title: "One-Way Video Interviews",
      description:
        "Conduct one-way video interviews to streamline the hiring process and review candidates at your convenience.",
    },
    {
      title: "Explore Talent Pool",
      description:
        "Dive into a vast talent pool to discover potential candidates and expand your hiring options.",
    },
    {
      title: "Shortlist",
      description:
        "Effortlessly create and manage shortlists of candidates for easy reference and collaboration.",
    },
    {
      title: "Explore Insights",
      description:
        "Gain valuable insights into your hiring process and make data-driven decisions to improve recruitment outcomes.",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
