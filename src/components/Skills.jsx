import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "./globe";
import { Code2, Database, Cpu, Cloud, ShieldCheck, Terminal } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaGithub,
  FaGitlab,
  FaAws,
  FaJava,
  FaRobot,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiCockroachlabs,
  SiJest,
  SiRedux,
  SiVite,
  SiSpringboot,
  SiMysql,
  SiRedis,
  SiKubernetes,
  SiPostman,
  SiAngular,
  SiGithubactions,
  SiSonarqube,
  SiTestinglibrary,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700/60 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-500/40">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.08)] to-transparent group-hover:via-[rgba(45,212,191,0.15)] animate-shimmer pointer-events-none"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/60 ${color} group-hover:scale-110 transition-transform duration-300 border border-gray-700/40`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/60 hover:bg-gray-700/80 text-gray-200 border-gray-700 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 hover:shadow-md hover:shadow-cyan-500/10"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium text-xs sm:text-sm">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React.js", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
        { name: "JavaScript (ES6+)", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#F7DF1E]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-white" /> },
        { name: "Redux", icon: <SiRedux className="w-4 h-4 text-[#764ABC]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "Angular", icon: <SiAngular className="w-4 h-4 text-[#DD0031]" /> },
        { name: "HTML5 & CSS3", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" /> },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
        { name: "Express.js", icon: <BsGrid1X2 className="w-4 h-4 text-gray-300" /> },
        { name: "Java", icon: <FaJava className="w-4 h-4 text-[#ED8B00]" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="w-4 h-4 text-[#6DB33F]" /> },
        { name: "REST APIs", icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "OOP & API Integration", icon: <Code2 className="w-4 h-4 text-teal-400" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Databases & Caching",
      color: "text-cyan-400",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
        { name: "MySQL", icon: <SiMysql className="w-4 h-4 text-[#00758F]" /> },
        { name: "CockroachDB", icon: <SiCockroachlabs className="w-4 h-4 text-[#0332A3]" /> },
        { name: "Redis", icon: <SiRedis className="w-4 h-4 text-[#DC382D]" /> },
        { name: "SQL Indexing & Queries", icon: <Database className="w-4 h-4 text-indigo-400" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: [
        { name: "AWS (EC2, S3)", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        { name: "Docker", icon: <FaDocker className="w-4 h-4 text-[#2496ED]" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="w-4 h-4 text-[#326CE5]" /> },
        { name: "GitLab CI/CD", icon: <FaGitlab className="w-4 h-4 text-[#FC6D26]" /> },
        { name: "GitHub Actions", icon: <SiGithubactions className="w-4 h-4 text-[#2088FF]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
      ],
    },
    {
      icon: ShieldCheck,
      title: "Testing & Quality",
      color: "text-purple-400",
      skills: [
        { name: "Jest", icon: <SiJest className="w-4 h-4 text-[#C21325]" /> },
        { name: "React Testing Library", icon: <SiTestinglibrary className="w-4 h-4 text-[#E33332]" /> },
        { name: "Unit & Integration Testing", icon: <Code2 className="w-4 h-4 text-pink-400" /> },
        { name: "SonarQube", icon: <SiSonarqube className="w-4 h-4 text-[#4B9FD5]" /> },
        { name: "Debugging & Code Reviews", icon: <Terminal className="w-4 h-4 text-emerald-400" /> },
      ],
    },
    {
      icon: Terminal,
      title: "Tools, Architecture & AI",
      color: "text-pink-400",
      skills: [
        { name: "Git & GitHub", icon: <FaGithub className="w-4 h-4 text-white" /> },
        { name: "Postman", icon: <SiPostman className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
        { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
        { name: "AI Tools & Copilot", icon: <FaRobot className="w-4 h-4 text-teal-300" /> },
        { name: "Microservices Concepts", icon: <BsGrid1X2 className="w-4 h-4 text-amber-300" /> },
      ],
    },
  ];

  return (
    <main
      className="pt-15 lg:pt-0 bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white min-h-screen"
    >
      <section className="container mx-auto px-4 py-11">
        <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
          Skills
        </h2>
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
