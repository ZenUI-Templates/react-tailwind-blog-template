import { Typography } from "@material-tailwind/react";
import ArticleCard from "./ArticleCard";

const ARTICLES = [
    {
        img: `https://plus.unsplash.com/premium_photo-1682104376313-ad77c73ba131?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        title: "Blockchain Development: How to learn",
        desc: "This article offers valuable insights into the skills, resources, and steps needed to embark on a journey in blockchain development.",
    },
    {
        img: `https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        title: "How to become a full stack developer - Roadmap",
        desc: "For those aspiring to become full stack developers, this roadmap is your ultimate guide. This article outlines the key milestones.",
    },
    {
        img: `https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        title: "Join the Web 3 Conference 2023 - Registration details",
        desc: "This article provides essential registration details for this exciting event where experts gather to explore the latest developments",
    },
];

export function Articles() {
    return (
        <section className="container mx-auto px-8 py-20">
            <Typography variant="h2" color="blue-gray">
                Other Articles
            </Typography>
            <Typography
                variant="lead"
                className="my-2 w-full font-normal !text-gray-500 lg:w-5/12"
            >
                Check out what&apos;s new in the web development and tech worls! Do not
                forget to subscribe to our blog and we will notify you with the latest
                news.
            </Typography>

            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
                {ARTICLES.map((props, idx) => (
                    <ArticleCard key={idx} {...props} />
                ))}
            </div>
        </section>
    );
}
export default Articles;
