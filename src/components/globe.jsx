import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "springboot",
  "amazonaws",
  "postgresql",
  "mysql",
  "redis",
  "docker",
  "kubernetes",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "jest",
  "testinglibrary",
  "sonarqube",
  "postman",
  "tailwindcss",
  "redux",
  "angular",
  "linux",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
