/* eslint-disable react/prop-types */
import {
    Typography,
    Card,
    CardHeader,
    CardBody,
    Avatar,
} from "@material-tailwind/react";



export function BlogPostCard({
    img,
    tag,
    title,
    desc,
    author,
    date,
}) {
    return (
        <Card shadow={true} className="hover:cursor-pointer group">
            <CardHeader>
                <img
                    src={img}
                    alt={title}
                    className="h-full max-h-[300px] w-full max-w-[760px] group-hover:scale-110 transition-transform object-cover"
                />
            </CardHeader>
            <CardBody className="p-6">
                <Typography variant="small" color="blue" className="mb-2 !font-medium">
                    {tag}
                </Typography>
                <Typography
                    as="a"
                    href="#"
                    variant="h5"
                    color="blue-gray"
                    className="mb-2 normal-case transition-colors hover:text-gray-900"
                >
                    {title}
                </Typography>
                <Typography className="mb-6 font-normal !text-gray-500">
                    {desc}
                </Typography>
                <div className="flex items-center gap-4">
                    <Avatar
                        size="sm"
                        variant="circular"
                        src={author.img}
                        alt={author.name}
                    />
                    <div>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-0.5 !font-medium"
                        >
                            {author.name}
                        </Typography>
                        <Typography
                            variant="small"
                            color="gray"
                            className="text-xs !text-gray-500 font-normal"
                        >
                            {date}
                        </Typography>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}


export default BlogPostCard;