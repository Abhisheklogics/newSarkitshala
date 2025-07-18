
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
const aiTools = [
  {
    name: "Google Gemini",
    description:
      "Gemini is Google's advanced AI chatbot that helps you write, research, plan, code, and learn faster — using the power of Google AI.",
    url: "https://gemini.google.com/",
  },
  {
    name: "ChatGPT",
    description:
      "A powerful AI chatbot by OpenAI that helps you write, code, brainstorm, explain concepts, and chat like a human.",
    url: "https://chat.openai.com",
  },
  {
    name: "Midjourney",
    description:
      "An AI image generation tool on Discord — just type your imagination, and it creates stunning digital art.",
    url: "https://www.midjourney.com",
  },
  {
    name: "Runway ML",
    description:
      "Create AI-generated videos, remove backgrounds, generate motion — all with creative tools powered by AI.",
    url: "https://runwayml.com",
  },
  {
    name: "Suno AI",
    description:
      "Generate complete music tracks just from a text prompt — compose songs without any instruments or singing skills.",
    url: "https://suno.com",
  },
  {
    name: "Leonardo AI",
    description:
      "Generate high-quality images, game assets, art, and 3D models using AI — ideal for designers and creatives.",
    url: "https://app.leonardo.ai",
  },
  {
    name: "Perplexity AI",
    description:
      "AI-powered search engine that answers your queries with sources — great for research, learning, and citations.",
    url: "https://www.perplexity.ai",
  },
  {
    name: "Durable AI",
    description:
      "Build a complete website in seconds using AI — just describe your business and Durable creates the site instantly.",
    url: "https://durable.co",
  },
  {
    name: "Krea AI",
    description:
      "Real-time AI design assistant that helps generate and enhance images live — perfect for artists and content creators.",
    url: "https://krea.ai",
  },
  {
    name: "Pika Labs",
    description:
      "Turn text into short videos using AI — ideal for content creators, storytelling, and video marketing.",
    url: "https://www.pika.art",
  },
  {
    name: "Copy.ai",
    description:
      "AI tool for writing marketing copy, ads, emails, and blogs — boost your productivity with smart content.",
    url: "https://www.copy.ai",
  },
  {
    name: "Writesonic",
    description:
      "An AI writing platform for creating articles, social media content, ads, emails, and even SEO blogs.",
    url: "https://writesonic.com",
  },
  {
    name: "Tome",
    description:
      "AI-powered storytelling and presentation tool — create stunning slide decks with content and design generated for you.",
    url: "https://tome.app",
  },
  {
    name: "Notion AI",
    description:
      "Integrated AI inside Notion — summarize notes, write documents, brainstorm ideas, and boost productivity.",
    url: "https://www.notion.so/product/ai",
  },
  {
    name: "Adobe Firefly",
    description:
      "Adobe’s creative AI for generating and editing images, text effects, and design elements — made for creators.",
    url: "https://firefly.adobe.com",
  },
  {
    name: "Remove.bg",
    description:
      "Automatically remove backgrounds from images with a single click — perfect for designers and editors.",
    url: "https://www.remove.bg",
  },
  {
    name: "D-ID",
    description:
      "Turn photos into talking avatars — generate AI-powered video presentations from just text or audio.",
    url: "https://www.d-id.com",
  },
  {
    name: "DeepSeek",
    description:
      "AI assistant focused on technical tasks — great for coding help, reading documents, summarizing, and chatting.",
    url: "https://chat.deepseek.com/",
  },
];


const AIToolGrid = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0b1120] via-[#0f172a] to-[#1e293b] text-white px-4 py-20">
      <StarsBackground />
      <ShootingStars />

      <h1 className="text-4xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">
           Explore Top AI Tools
        </span>
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {aiTools.map((tool, index) => (
          <div
            key={index}
            className="group bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-5 shadow-lg transition-all hover:scale-[1.03] hover:shadow-2xl hover:border-blue-500"
          >
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
              {tool.name}
            </h2>
            <p className="text-sm text-gray-300 mb-4">{tool.description}</p>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md transition"
            >
              Visit Tool
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIToolGrid;
