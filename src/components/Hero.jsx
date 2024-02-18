
import { Button, Typography, Input } from "@material-tailwind/react";


function Hero() {
    return (
        <header className="mt-5 bg-white p-8">
            <div className="w-w-full container mx-auto pt-12 pb-24 text-center">
                <Typography
                    color="blue-gray"
                    className="mx-auto w-full text-[30px] lg:text-[48px] font-bold leading-[45px] lg:leading-[60px] lg:max-w-2xl"
                >
                    DevBytes: Bytes of Web Wisdom
                </Typography>
                <Typography
                    variant="lead"
                    className="mx-auto mt-8 mb-4 w-full px-8 !text-gray-700 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20"
                >
                    Expand your web development knowledge with our tutorials and
                    learning articles.
                </Typography>
                <div className="grid place-items-start justify-center gap-2">
                    <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
                        <div className="w-80">
                            <Input label="name@react-tailwind.com" />
                        </div>
                        <Button size="md" className="lg:w-max shrink-0" fullWidth color="gray">
                            get started
                        </Button>
                    </div>
                    <div className="flex items-center gap-1">
                        <Typography variant="small" className="font-normal text-gray-700">
                            See our{" "}
                            <a
                                href="#"
                                className="hover:text-gray-900 transition-colors underline"
                            >
                                Terms and Conditions
                            </a>
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="w-full lg:container lg:mx-auto">
                <img
                    src="https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="credit cards"
                    className="h-96 w-full rounded-lg object-cover lg:h-[21rem]"
                />
            </div>
        </header>
    );
}
export default Hero;
