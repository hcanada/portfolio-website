import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const project = [
  {
    name: "Free Items Website",
    project: "personal",
    photo: "/inprogress.webp",
    description:
      "A location-based platform where people give away items for free, discover nearby giveaways, and connect with their community.",
    stack: ["Nextjs -", " TypeScript -", " Supabase -", " Tailwind "],
  },
  {
    name: "Travue",
    project: "personal",
    photo: "/inprogress.webp",
    description:
      "A platform where people share their travel vlogs and experiences. Discover new places, get travel tips, and watch personal stories from other travelers.",
    stack: ["Nextjs -", " TypeScript -", " Supabase -", " Tailwind "],
  },
  {
    name: "Crypto Price Bot",
    project: "personal",
    photo: "/bot.jpg",
    description:
      "A Telegram bot that instantly provides the latest cryptocurrency price. Simply type the name of any cryptocurrency, and the bot will reply with its current price.",
    stack: ["Python -", " Telebot -", " Coinmarketcap API "],
  },
  {
    name: "Leave Management System",
    project: "professional",
    photo: "/lms.png",
    description:
      "An internal application developed for Mercedes-Benz Group Services Phils., Inc that allows employees to submit leave requests and enables managers and HR to approve and monitor employee leave.",
    stack: ["ReactJS -", " .NET -", " MS SQL Server "],
  },
];
type ProjectCardProps = {
  project: string;
};
export const Projectcard = (props: ProjectCardProps) => {
  const selectedProject = props.project;
  return (
    <div className="mt-20  gap-4 md:gap-6 grid md:grid-cols-3 justify-center">
      {project.map(
        (proj) =>
          proj.project === selectedProject && (
            <Card key={proj.name} className="max-w-sm flex-1">
              <CardHeader>
                <Image
                  src={proj.photo}
                  alt="Project photo"
                  width={500}
                  height={500}
                />
                <CardTitle className="text-xl mt-auto">{proj.name}</CardTitle>
                <CardDescription>{proj.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">{proj.stack}</CardFooter>
            </Card>
          )
      )}
    </div>
  );
};
