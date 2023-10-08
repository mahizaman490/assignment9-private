const Banner = () => {
    return (
    <>
    
    
    
         <div className="relative md:h-[600px] lg:h-[800px]">
           <img className=" w-full h-full " src='https://i.ibb.co/HNVgLZR/shine-wedding-altar-newlyweds-stands-backyard-decorated-with-balloons.jpg' alt=""  />
        <div style={{ position: 'absolute', width:'100%',height: '100%',left: '0', right: '0',bottom:'0',  zIndex:'2'}}> 
        
       </div>
       <div>
        <h1 className=" text-3xl md:text-6xl lg:text-7xl font-semibold text-yellow-500 absolute top-[35%]  left-[25%]  md:top-[40%]  lg:left-[32%]"> <span className="text-rose-600">We Create  You </span>
        <br />celebrate !!</h1>
       </div>
       </div >
    
    
    

    
    </>
   
    );
};

export default Banner;