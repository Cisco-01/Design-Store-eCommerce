import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import data from '../utils/data';

function Banner() {
  return (
    <div className="h-full w-full m-auto">
      <Carousel
        showArrows={true}
        showThumbs={false}
        emulateTouch={true}
        infiniteLoop={true}
      >
        {data.bannerImages.map(item => (
          <li key={item.id}>
            <img
              loading="eager"
              decoding="async"
              className="w-full h-60 sm:h-[350px] md:h-[450px] lg:h-[500px] object-contain animate-fade animate-once animate-ease-in"
              src={item.bigImg}
              alt={item.id}
            />
          </li>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
