import React from 'react';

const About = () => {
  return (
    <div className="px-4 py-8 md:py-16 bg-gray-100">
      <h1 className="text-3xl font-semibold text-center text-red-500 md:text-4xl">Here is some</h1>
      <p className="text-2xl font-semibold text-center text-yellow-400 md:text-3xl py-3">demo for background setup</p>

      <div className="carousel relative w-full md:h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/qyBj3KD/groom-bride-s-wedding-table-decorated-with-flowers-candles.jpg" alt="Slide 1" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/2SY1Qhg/antique-gold-flower-light-candle.jpg" alt="Slide 2" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/9bwk72s/front-view-rich-arch-decorated-with-adorable-fresh-roses-flowers.jpg" alt="Slide 3" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/qjXcNrJ/man-opening-bottle-champagne.jpg" alt="Slide 4" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

      <div className="bg-yellow-200 p-3 mt-10 md:p-8 text-center">
        <h2 className="text-3xl pb-3 md:text-6xl font-semibold text-red-500">Why Choose Us:</h2>

        <div className="max-w-3xl mx-auto pt-10">
          <p className="text-gray-700 leading-7">
            1. Expertise: Our team of seasoned event planners boasts years of experience in the industry. We know the ins
            and outs of event planning and will ensure every detail is meticulously crafted.
          </p>
          <p className="text-gray-700 leading-7">
            2. Tailored Solutions: No two events are the same, and neither are our approaches. We tailor our services to
            suit your specific needs, preferences, and budget, ensuring a personalized and unforgettable experience.
          </p>
          {/* Add more paragraphs for each point */}
        </div>
      </div>
    </div>
  );
};

export default About;
