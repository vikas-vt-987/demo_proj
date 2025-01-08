import Head from 'next/head';
import Slider from 'react-slick';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,           // Enable autoplay
    autoplaySpeed: 3000,     // Set autoplay speed to 1 second (1000 milliseconds)
  };

  const images = [
    '/hero.png',
    '/slider2.png',
    '/slider3.png',
  ];

  return (
    <div>
      <Head>
        <title>Retrevo</title>
        <meta name="description" content="get your gadgets" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} className='mx-auto' alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
