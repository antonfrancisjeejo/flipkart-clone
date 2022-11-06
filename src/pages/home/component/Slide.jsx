import { Link, useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MultiSlide = ({ data, title }) => {
  const navigate = useNavigate();
  console.log(data, "data");
  return (
    <Box className="flex mt-3 bg-white">
      <Box className="flex z-10 flex-col pt-[15px] w-[15%] mt-4">
        <div className="m-auto">
          <Typography
            sx={{ fontSize: "24px" }}
            className=" text-center px-[20px] font-semibold mr-6"
          >
            {title}
          </Typography>
          <div className="mx-[20px] text-center mt-3">
            <Button
              variant="contained"
              color="primary"
              className="bg-blue rounded text-sm "
              onClick={() => {
                navigate("productList/1");
              }}
            >
              View All
            </Button>
          </div>
        </div>
        <img
          className="mt-auto"
          src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg"
          alt="view all"
        />
      </Box>
      <Box className="w-[85%]">
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          centerMode={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={10000}
          keyBoardControl={true}
          customLeftArrow={false}
          showDots={false}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {data.map((temp, i) => (
            <div key={i}>
              <Link
                to={`product/${temp.id}`}
                style={{ textDecoration: "none" }}
              >
                <Box textAlign="center" className="py-[25px] px-[15px]">
                  <img src={temp.url} className="m-auto h-[150px]" alt="" />
                  <Typography
                    className="text-sm mt-[5px]"
                    style={{ fontWeight: 600, color: "#212121" }}
                  >
                    {temp.title.shortTitle}
                  </Typography>
                  <Typography
                    className="text-sm mt-[5px]"
                    style={{ color: "green" }}
                  >
                    {temp.discount}
                  </Typography>
                  <Typography
                    className="text-sm mt-[5px]"
                    style={{ color: "#212121", opacity: ".6" }}
                  >
                    {temp.tagline}
                  </Typography>
                </Box>
              </Link>
            </div>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

const Slide = (props) => {
  return <>{props.multi === true ? <MultiSlide {...props} /> : ""}</>;
};

export default Slide;
