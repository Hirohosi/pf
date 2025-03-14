import { useState, useMemo } from "react";
import {
  GithubIcon,
  X,
  Mail,
  Code2,
  Terminal,
  Database,
  Globe,
} from "lucide-react";
import { projects } from "./Con";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  serviceLink: string;
  githubLink: string;
}

function App() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((project) => project.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    if (!selectedTag) return projects;
    return projects.filter((project) => project.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              ほしひろの<span className="text-blue-400">ポートフォリオ</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              フルスタックエンジニア | クリエイティブ・プロブレムソルバー
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/Hirohosi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <GithubIcon size={24} />
              </a>
              <a
                href="mailto:h19970216h@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://twitter.com/hoshihiro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            技術スタック
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard
              icon={<Code2 className="w-8 h-8" />}
              title="フロントエンド"
              skills={["React", "TypeScript", "Next.js", "Tailwind CSS"]}
            />
            <SkillCard
              icon={<Terminal className="w-8 h-8" />}
              title="バックエンド"
              skills={["Python", "Go"]}
            />
            <SkillCard
              icon={<Database className="w-8 h-8" />}
              title="データベース"
              skills={["PostgreSQL", "OracleDB", "DynamoDB", "Firebase"]}
            />
            <SkillCard
              icon={<Globe className="w-8 h-8" />}
              title="インフラ・その他"
              skills={["AWS", "Firebase", "Supabase", "CI/CD", "Github"]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            プロジェクト
          </h2>

          {/* Filter Tags */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  !selectedTag
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                すべて
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedTag === tag
                      ? "bg-blue-500 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                serviceLink={project.serviceLink}
                githubLink={project.githubLink}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="text-center text-gray-400 mt-8">
              該当するプロジェクトが見つかりませんでした。
            </p>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            お問い合わせ
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-300 mb-8">
              お気軽にメールでお問い合わせください。
            </p>
            <a
              href="mailto:h19970216h@gmail.com"
              className="inline-flex items-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Mail size={20} />
              メールでお問い合わせ
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, skills }: SkillCardProps) {
  return (
    <div className="p-6 bg-gray-800 rounded-xl">
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-400">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  image,
  tags,
  serviceLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden transform transition-transform hover:scale-[1.02]">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-2 justify-center">
          {serviceLink && (
            <button
              onClick={() => window.open(serviceLink, "_blank")}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              サービスを見る
            </button>
          )}
          {githubLink && (
            <button
              onClick={() => window.open(githubLink, "_blank")}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg"
            >
              GitHubを見る
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
