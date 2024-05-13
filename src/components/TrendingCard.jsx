import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import product from "/public/Product.png";

function TrendingCard() {
  return (
    <>
      <Typography
        variant="h5"
        color="blue-gray"
        className="mt-20 ml-10 font-extrabold text-[50px]"
      >
        New Arrivals
      </Typography>
      <div className="flex flex-cols-3 items-center justify-between mb-10">
        <Card className=" m-10  shadow-none w-[25%] h-[20%]">
          <CardHeader floated={false} color="blue-gray">
            <img src={product} alt="ui/ux review check" />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          </CardHeader>
          <CardBody>
            <div className="mb-0 flex items-center justify-between">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-medium"
              >
                Plaid Sleeve Kangaroo Pocket Drawstriring hoodie
              </Typography>
              <Typography
                color="blue-gray"
                className="flex items-center gap-1.5 font-normal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-mt-0.5 h-5 w-5 text-yellow-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                5.0
              </Typography>
            </div>
            <div className="grid grid-cols-1">
              <Typography color="gray">surrounded by.</Typography>
              <Typography color="gray">surrounded by.</Typography>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              1500 ETB
            </Typography>
          </CardFooter>
        </Card>
        <Card className=" m-10  shadow-none w-[25%] h-[20%]">
          <CardHeader floated={false} color="blue-gray">
            <img src={product} alt="ui/ux review check" />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          </CardHeader>
          <CardBody>
            <div className="mb-0 flex items-center justify-between">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-medium"
              >
                Plaid Sleeve Kangaroo Pocket Drawstriring hoodie
              </Typography>
              <Typography
                color="blue-gray"
                className="flex items-center gap-1.5 font-normal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-mt-0.5 h-5 w-5 text-yellow-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                5.0
              </Typography>
            </div>
            <div className="grid grid-cols-1">
              <Typography color="gray">surrounded by.</Typography>
              <Typography color="gray">surrounded by.</Typography>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              1500 ETB
            </Typography>
          </CardFooter>
        </Card>
        <Card className=" m-10  shadow-none w-[25%] h-[20%]">
          <CardHeader floated={false} color="blue-gray">
            <img src={product} alt="ui/ux review check" />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          </CardHeader>
          <CardBody>
            <div className="mb-0 flex items-center justify-between">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-medium"
              >
                Plaid Sleeve Kangaroo Pocket Drawstriring hoodie
              </Typography>
              <Typography
                color="blue-gray"
                className="flex items-center gap-1.5 font-normal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-mt-0.5 h-5 w-5 text-yellow-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                5.0
              </Typography>
            </div>
            <div className="grid grid-cols-1">
              <Typography color="gray">surrounded by.</Typography>
              <Typography color="gray">surrounded by.</Typography>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              1500 ETB
            </Typography>
          </CardFooter>
        </Card>
        <Card className=" m-10  shadow-none w-[25%] h-[20%]">
          <CardHeader floated={false} color="blue-gray">
            <img src={product} alt="ui/ux review check" />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          </CardHeader>
          <CardBody>
            <div className="mb-0 flex items-center justify-between">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-medium"
              >
                Plaid Sleeve Kangaroo Pocket Drawstriring hoodie
              </Typography>
              <Typography
                color="blue-gray"
                className="flex items-center gap-1.5 font-normal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-mt-0.5 h-5 w-5 text-yellow-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                5.0
              </Typography>
            </div>
            <div className="grid grid-cols-1">
              <Typography color="gray">surrounded by.</Typography>
              <Typography color="gray">surrounded by.</Typography>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              1500 ETB
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
export default TrendingCard;
