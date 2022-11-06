import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../../constant/data";

const Banner = () => {
  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      StylesProvider
      navButtonsProps={{
        style: {
          color: "#494949",
          backgroundColor: "#FFFFFF",
          borderRadius: 5,
          margin: 0,
          width: 50,
          height: 80,
        },
      }}
    >
      {bannerData.map((image, i) => (
        <img key={i} src={image} className="w-[100%] lg:h-[280px] h-[180px]}" alt="" />
      ))}
    </Carousel>
  );
};

export default Banner;
