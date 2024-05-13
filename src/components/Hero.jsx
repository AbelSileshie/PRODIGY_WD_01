import {
  Carousel,
  Typography,
  Button,
  Card,
  CardHeader,
  CardBody,
  Tooltip,
  Chip,
} from "@material-tailwind/react";
import "../index.css";
import product from "/public/Product.png";
function Hero() {
  return (
    <Carousel className="rounded-xl bg-white-200">
      <div className="flex relative h-full w-full">
        <Card className="w-full h-full  flex-row bg-inherit">
          <CardHeader
            shadow={false}
            floated={false}
            className=" w-[40%] shrink-0 rounded-xl h-[50%]  bg-gray-200 ml-12"
          >
            <div className="w-full h-full flex items-center justify-center rounded-full ">
              <img
                src={product}
                alt="card-image"
                className="h-full w-full  object-cover rounded-[20px] object-center"
              />
            </div>
          </CardHeader>
          <CardBody className="w-[50%] h-[50%]">
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-2 mt-3 lg:font-extrabold md:font-bold sm:font-normal "
            >
              Plaid Sleeve Kangaroo Pocket Drawstring Hoodie
            </Typography>
            <Typography
              variant="h3"
              color="blue-gray"
              className="mb-2 mt-3 lg:font-bold md:font-bold sm:font-bold "
            >
              By Fashion Nova
            </Typography>
            <Typography
              variant="h5"
              color="gray"
              className="mb-8 font-light text-justify"
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. It is a
              long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.{" "}
            </Typography>
            <div className="flex grid-cols-2 pb-20">
              <Card className="w-20 h-20 mr-2 mt-0 bg-gray-700">
                <div className=" text-center mt-[30%] text-black">67$</div>
              </Card>
              <div className="grid grid-cols-1">
                <Typography color="blue" className=" font-bold">
                  Save 25%
                </Typography>
                <Typography color="gray" className=" font-bold">
                  Inclusive deal of the day
                </Typography>
              </div>
            </div>

            <div className="flex grid-cols-2">
              <Button variant="text" className="">
                Add to Cart
              </Button>
              <Button variant="text" className="flex items-center">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="grid grid-cols-2 relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className=" relative inset-0 grid h-full w-full place-items-cente">
          <div className="w-full text-center">
            <Typography
              variant="h1"
              color="black"
              className=" mt-3 ml-6 mb-2 text-3xl md:text-4xl lg:text-5x text-wrap text-left"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="black"
              className="mb-1 text-left ml-8"
            >
              Sample Text
            </Typography>
            <div className="flex justify-start gap-2 ml-7">
              <Button size="lg" color="blue">
                Explore
              </Button>
              <Button size="lg" color="blue" variant="text">
                Gallery
              </Button>
            </div>
            <div className="mt-[40%]"></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className=" relative inset-0 grid h-full w-full place-items-cente">
          <div className="w-full text-center">
            <Typography
              variant="h1"
              color="black"
              className=" mt-3 ml-6 mb-2 text-3xl md:text-4xl lg:text-5x text-wrap text-left"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="black"
              className="mb-1 text-left ml-8"
            >
              Sample Text
            </Typography>
            <div className="flex justify-start gap-2 ml-7">
              <Button size="lg" color="blue">
                Explore
              </Button>
              <Button size="lg" color="blue" variant="text">
                Gallery
              </Button>
            </div>
            <div className="mt-[60%]"></div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
export default Hero;
