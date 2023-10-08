

const Eventid = ({event}) => {
    const {name,image,price,description} = event || {}
    return (
        <div>
        <div className="flex flex-col md:flex-row">

            <div className="relative flex  flex-col md:w-8/12 bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-96 overflow-hidden  bg-white bg-clip-border text-gray-700">
                    <img className="h-full w-full"
                        src={image}
                    />
                </div>

            </div>








            <div className="p-6 md:w-4/12">
                <div className="mb-2 ">
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased md:text-2xl lg:text-4xl">
                        {name}
                    </p>

                </div>
                <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75 md:text-2xl md:py-5 lg:text-3xl">
                    {description}
                </p>

                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 lg:text-4xl md:text-2xl antialiased">
                    {price}
                </p>
            </div>

        </div>








    </div>

    );
};

export default Eventid;