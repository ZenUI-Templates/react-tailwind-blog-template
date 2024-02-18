
import {
    Button,
    Typography,
    Tabs,
    TabsHeader,
    Tab,
} from "@material-tailwind/react";
import { ArrowSmallDownIcon } from "@heroicons/react/24/solid";
import BlogPostCard from "./BlogPostCard";


const POSTS = [
    {
        img: `https://plus.unsplash.com/premium_photo-1682104376313-ad77c73ba131?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        tag: "Enterprise",
        title: "The key new features and changes in Tailwind CSS",
        desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
        date: "10 September 2022",
        author: {
            img: `https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
            name: "Ryan Samuel",
        },
    },
    {
        img: `https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        tag: "Startups",
        title: "Lyft launching cross-platform service this week",
        desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
        date: "12 September 2022",
        author: {
            img: `https://plus.unsplash.com/premium_photo-1661542513177-44f248258259?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
            name: "Nora Hazel",
        },
    },
    {
        img: `https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        tag: "Trending",
        title: "6 insights into the French Fashion landscape",
        desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
        date: "16 September 2022",
        author: {
            img: `https://plus.unsplash.com/premium_photo-1661542513177-44f248258259?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
            name: "Nora Hazel",
        },
    },
    {
        img: `https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        tag: "Lifestyle",
        title: "Autodesk looks to future of 3D printing with Project",
        desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
        date: "18 September 2022",
        author: {
            img: `https://images.unsplash.com/photo-1517530094915-500495b15ade?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
            name: "Ryan Samuel",
        },
    },
    {
        img: `https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        tag: "Enterprise",
        title: "Autodesk looks to future of 3D printing with Project",
        desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
        date: "10 September 2022",
        author: {
            img: `https://plus.unsplash.com/premium_photo-1661542513177-44f248258259?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
            name: "Ryan Samuel",
        },
    },
    {
        img: `https://images.unsplash.com/photo-1539683255143-73a6b838b106?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        tag: "Startups",
        title: "Lyft launching cross-platform service this week",
        desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
        date: "12 September 2022",
        author: {
            img: `https://plus.unsplash.com/premium_photo-1661542513177-44f248258259?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
            name: "Nora Hazel",
        },
    },
];

export function Posts() {
    return (
        <section className="grid min-h-screen place-items-center p-8">
            <Tabs value="trends" className="mx-auto max-w-7xl w-full mb-16 ">
                <div className="w-full flex mb-8 flex-col items-center">
                    <TabsHeader className="h-10 !w-12/12 md:w-[50rem] border border-white/25 bg-opacity-90">
                        <Tab value="trends">Trends</Tab>
                        <Tab value="frontend">Frontend</Tab>
                        <Tab value="backend">Backend</Tab>
                        <Tab value="cloud">Cloud</Tab>
                        <Tab value="ai">AI</Tab>
                        <Tab value="tools">Tools</Tab>
                    </TabsHeader>
                </div>
            </Tabs>
            <Typography variant="h6" className="mb-2">
                Latest Blog Posts
            </Typography>
            <Typography variant="h1" className="mb-2">
                Trends News
            </Typography>
            <Typography
                variant="lead"
                color="gray"
                className="max-w-3xl mb-36 text-center text-gray-500"
            >
                Check out what&apos;s new in the web development and tech worls! Do not
                forget to subscribe to our blog and we will notify you with the latest
                news.
            </Typography>
            <div className="container my-auto grid grid-cols-1 gap-x-8 gap-y-16 items-start lg:grid-cols-3">
                {POSTS.map(({ img, tag, title, desc, date, author }) => (
                    <BlogPostCard
                        key={title}
                        img={img}
                        tag={tag}
                        title={title}
                        desc={desc}
                        date={date}
                        author={{
                            img: author.img,
                            name: author.name,
                        }}
                    />
                ))}
            </div>
            <Button
                variant="text"
                size="lg"
                color="gray"
                className="flex items-center gap-2 mt-24"
            >
                <ArrowSmallDownIcon className="h-5 w-5 font-bold text-gray-900" />
                VIEW MORE
            </Button>
        </section>
    );
}

export default Posts;
