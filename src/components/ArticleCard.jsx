/* eslint-disable react/prop-types */
import {
    Typography,
    Card,
    CardBody,
} from "@material-tailwind/react";




export function ArticleCard({ img, title, desc }) {
    return (
        <Card
            className="relative grid min-h-[30rem] items-end overflow-hidden rounded-xl group hover:cursor-pointer"
            color="transparent"
        >
            <img
                src={img}
                alt="bg"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform object-center"
            />
            <div className="absolute inset-0 bg-black/60" />
            <CardBody className="relative flex flex-col justify-end">
                <Typography variant="h4" color="white">
                    {title}
                </Typography>
                <Typography
                    variant="paragraph"
                    color="white"
                    className="my-2 font-normal"
                >
                    {desc}
                </Typography>
            </CardBody>
        </Card>
    );
}

export default ArticleCard;