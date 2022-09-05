import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ICarouselComponent {
  title?: string;
  slides: {
    title: string;
    image: string;
  }[];
}

const CarouselComponent: NextPage<ICarouselComponent> = (props) => {
  return (
    <div>
      <Carousel>
        {props?.slides?.map((slide: { title: string; image: string }) => {
          return (
            <div key={`${slide?.title}`}>
              <img src={slide?.image} />
              <p className="legend">{slide?.title}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
