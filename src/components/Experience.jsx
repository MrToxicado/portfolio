import React from "react";
import { Database, Rocket, CheckCircle2, MapPin } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  location,
  period,
  description,
  highlights,
  skills,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-2xl" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-2xl p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl flex flex-col justify-between">
      <div>
        {/* Floating icon with pulse effect */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />
            <Icon className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <span className="text-xs sm:text-sm font-mono bg-blue-500/10 text-cyan-300 border border-cyan-500/20 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>

        {/* Header with Title and Company */}
        <div className="space-y-1 mb-4">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {title}
          </h3>
          <div className="flex flex-wrap items-center gap-2 text-gray-300">
            <span className="font-semibold text-blue-400 text-lg">{company}</span>
            {location && (
              <span className="flex items-center text-xs text-gray-400 gap-1 bg-gray-800/60 px-2 py-0.5 rounded-md">
                <MapPin className="w-3 h-3 text-cyan-400" />
                {location}
              </span>
            )}
          </div>
        </div>

        {/* Short description */}
        <p className="text-gray-300 border-l-4 border-cyan-500/50 pl-4 py-1 mb-6 text-sm italic bg-gray-800/20 rounded-r">
          {description}
        </p>

        {/* Highlights */}
        {highlights && highlights.length > 0 && (
          <div className="space-y-2.5 mb-6">
            <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
              Key Contributions & Impact
            </h4>
            <ul className="space-y-2">
              {highlights.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Tech stack badges */}
      {skills && skills.length > 0 && (
        <div className="pt-4 border-t border-gray-800/80">
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 rounded-md bg-cyan-950/40 text-cyan-300 border border-cyan-800/30 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-12 h-12 pointer-events-none">
        <div className="absolute top-0 right-0 w-4 h-[2px] bg-cyan-500/40" />
        <div className="absolute top-0 right-0 w-[2px] h-4 bg-cyan-500/40" />
      </div>
      <div className="absolute bottom-4 left-4 w-12 h-12 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-4 h-[2px] bg-purple-500/40" />
        <div className="absolute bottom-0 left-0 w-[2px] h-4 bg-purple-500/40" />
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Rocket,
      title: "Software Developer",
      company: "ANNEX LIFE",
      location: "Delhi, India",
      period: "Mar 2026 – Present",
      description:
        "Developing scalable full-stack applications, robust backend services, and reusable component architectures.",
      highlights: [
        "Developing full-stack applications using Java, Spring Boot, React.js, TypeScript, and REST APIs, focusing on scalable architecture, reusable components, and maintainable code.",
        "Implementing backend services and RESTful APIs, business logic, request validation, exception handling, and MySQL / PostgreSQL integration for reliable data processing.",
        "Improved API reliability and application performance by resolving backend issues, reducing recurring defects by 18% through structured root-cause analysis.",
        "Boosted development efficiency by 30% through modular backend services and reusable frontend component design.",
        "Supporting automated testing, Git-based version control, CI/CD pipelines, Docker, and AWS deployment workflows within agile deadlines.",
      ],
      skills: [
        "Java",
        "Spring Boot",
        "React.js",
        "TypeScript",
        "REST APIs",
        "MySQL",
        "PostgreSQL",
        "AWS",
        "Docker",
        "CI/CD",
      ],
    },
    {
      icon: Database,
      title: "Software Engineer",
      company: "One.com",
      location: "Gurugram, India",
      period: "Dec 2021 – Feb 2026",
      description:
        "Engineered and scaled core features for a large-scale SaaS Webmail platform serving millions of users globally.",
      highlights: [
        "Developed and enhanced core features of a large-scale SaaS Webmail platform using React.js, Redux, TypeScript, Node.js, Redis, Docker, and Kubernetes.",
        "Led integration of AI Writing Assistant, Calendar, Contacts, and Notification services, driving a 160% increase in user engagement.",
        "Migrated legacy KnockoutJS modules to React, slashing technical debt and cutting feature delivery time by 25%.",
        "Integrated REST APIs and product services, reducing code duplication by 17% and expanding test coverage by 28% with Jest and React Testing Library.",
        "Engineered accessible, high-performance UI components, frontend caching, and maintained GitLab CI/CD deployment pipelines.",
      ],
      skills: [
        "React.js",
        "TypeScript",
        "Redux",
        "Node.js",
        "Express.js",
        "Redis",
        "Docker",
        "Kubernetes",
        "Jest",
        "GitLab CI/CD",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="relative container mx-auto px-6 mt-10">
          {/* Section header with enhanced effects */}
          <div className="flex flex-col items-center space-y-8 mb-20">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
                Professional Journey
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
              "Transforming ideas into digital reality, one project at a time"
            </p>
          </div>

          {/* Experience grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Enhanced background effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
    </>
  );
};

export default ExperienceSection;
