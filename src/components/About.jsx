
const About = () => {
    return (
        <>
        
        <h1 className="text-3xl text-red-500 font-semibold text-center md:text-4xl">Here is some</h1> 
            <p className="text-2xl text-yellow-400 font-semibold text-center md:text-3xl py-3">demo for background setup</p>
<div className="carousel w-full md:h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/qyBj3KD/groom-bride-s-wedding-table-decorated-with-flowers-candles.jpg"  className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/2SY1Qhg/antique-gold-flower-light-candle.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/9bwk72s/front-view-rich-arch-decorated-with-adorable-fresh-roses-flowers.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/qjXcNrJ/man-opening-bottle-champagne.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
 
 <div className="bg-yellow-200  p-3 mt-10 md:p-8 text-center">
         <h2 className="text-3xl pb-3 md:text-6xl font-semibold text-red-500"> Why Choose Us:</h2>

<div>
 <small className="pt-10">
    <p> 1. Expertise: Our team of seasoned event planners boasts years of experience in the industry. We know the ins and outs of event planning and will ensure every detail is meticulously crafted.</p>
<p>2. Tailored Solutions: No two events are the same, and neither are our approaches. We tailor our services to suit your specific needs, preferences, and budget, ensuring a personalized and unforgettable experience.</p>
<p>3. Creativity: We are passionate about thinking outside the box. Our creative minds thrive on designing unique themes, innovative decor, and memorable experiences that will leave your guests in awe.</p>
<p>4. Attention to Detail: From selecting the perfect venue to coordinating vendors and managing timelines, we leave no stone unturned when it comes to delivering a flawless event.</p>
<p>5. Stress-Free Planning: Planning an event can be overwhelming. We take the stress off your shoulders, allowing you to savor every moment of your special day while we handle the logistics.</p>
<p>6. Network of Partners: Over the years, we have cultivated strong relationships with the best vendors, venues, and suppliers in the industry. This means access to top-notch resources for your event.</p>

</small>







</div>

 
 </div>
        
        </>
    );
};

export default About;