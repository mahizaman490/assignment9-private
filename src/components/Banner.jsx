const Banner = () => {
    return (
    <>
    
    
    
         <div className="relative h-[800px]">
           <img className=" w-full md:h-full " src='https://i.ibb.co/HNVgLZR/shine-wedding-altar-newlyweds-stands-backyard-decorated-with-balloons.jpg' alt=""  />
        <div style={{ position: 'absolute', width:'100%',height: '100%',left: '0', right: '0',bottom:'0', backgroundColor: 'rgba(0,0,0,0.2)', zIndex:'2'}}> 
        
       </div>
       <div>
        <h1 className=" text-3xl md:text-6xl lg:text-7xl font-semibold text-gray-50 absolute top-[15%]  left-[25%]  md:top-[40%]  lg:left-[32%]"> <span className="text-rose-500">We Create  You </span>
        <br />celebrate !!</h1>
       </div>
       </div >
    
    
    

    
    </>
   
    );
};

export default Banner;