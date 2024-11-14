//Icons
import Company from "@/components/icons/Company";
import Model from "@/components/icons/Model";
import Calender from "@/components/icons/Calender";
import Road from "@/components/icons/Road";
import Location from "@/components/icons/Location";
import Money from "@/components/icons/Money";

const CarDetails = (props) => {
    const { id, name, model, year, distance, location, image, price, description } = props;

    return(
        <div className="flex flex-col items-center w-3/4 xl:w-4/5 mx-auto p-10 bg-gray-100">
            <div className="items-center xl:flex gap-20 xl:gap-10">
                <img className="w-[400px] h-[300px] md:w-[500px] md:h-[330px]
                 lg:w-[690px] lg:h-[450px]
                 xl:w-[410px] xl:h-[300px] mb-10 shadow-md"
                     src={image}
                     alt="img"
                />
                <div className="flex flex-col w-[400px] h-[320px] xl:mt-[-40px] md:w-[500px] md:h-[330px]
                 lg:w-[690px] lg:h-[400px]
                  xl:w-[500px] xl:h-[300px]
                  lg:p-10 xl:p-5 p-5 text-justify bg-[#fff] shadow-md">
                    <h3 className="flex text-lg lg:text-2xl xl:text-lg font-bold">
                        {name} {model}
                    </h3>
                    <div className="grid grid-cols-2 justify-between w-[360px] mt-2 mx-auto md:w-[450px] lg:w-[700px] xl:w-[450px] lg:mt-[-5px] xl:gap-x-10">
                        <div className="flex mt-5 gap-1 lg:mt-8 xl:mt-4 lg:gap-3">
                            <Company />
                            <p className="text-sm font-bold xl:mt-1">Company:</p>
                            <span className="mt-1 text-xs lg:text-md xl:text-sm font-bold text-gray-500">{name}</span>
                        </div>
                        <div className="flex mt-5 ml-12 md:ml-20 lg:ml-28 xl:ml-10 gap-1 md:mt-4 lg:mt-8 lg:gap-3 xl:mt-5">
                            <Model />
                            <p className="text-sm font-bold xl:mt-1">Model:</p>
                            <span className="mt-1 text-xs xl:text-sm font-bold text-gray-500">{model}</span>
                        </div>
                        <div className="flex mt-3 gap-1 md:mt-5 lg:mt-8 lg:gap-3 xl:mt-4">
                            <Calender />
                            <p className="text-sm font-bold xl:mt-1">First Registration:</p>
                            <span className="mt-1 text-xs xl:text-sm font-bold text-gray-500">{year}</span>
                        </div>
                        <div className="flex ml-12 md:ml-20 lg:ml-28 xl:ml-10 mt-3 gap-1 md:mt-5 lg:mt-8 lg:gap-3 xl:mt-4">
                            <Road />
                            <p className="text-sm font-bold xl:mt-1">Km Driven:</p>
                            <span className="mt-1 text-xs xl:text-sm font-bold text-gray-500">{distance}</span>
                        </div>
                    </div>
                    <div className="flex mt-3 gap-1 md:mt-5 lg:mt-8 lg:gap-3 xl:mt-4">
                        <Location />
                        <p className="text-sm font-bold xl:mt-1">Location:</p>
                        <span className="mt-1 text-xs xl:text-sm font-bold text-gray-500">{location}</span>
                    </div>
                    <div className="flex mt-5 lg:mt-8 xl:mt-4">
                        <div className="flex gap-1 xl:gap-2">
                            <Money/>
                            <p className="mt-2 text-md xl:mt-1 xl:text-md font-bold">price: </p>
                        </div>
                        <span className="ml-[200px] md:ml-[310px] lg:ml-[460px] xl:ml-[300px] xl:text-md mt-3 text-md font-bold text-gray-500">$ {price}</span>
                    </div>
                    <button className="mt-5 lg:mt-6 xl:mt-3 p-2 text-gray-100 font-bold bg-amber-500 hover:bg-amber-600 shadow">Buy</button>
                </div>
            </div>
            <div className="w-[400px] md:w-[500px] lg:w-[690px] xl:w-[950px] xl:mt-5 mt-10 p-6 text-justify bg-[#fff] shadow-md">
                <p className="text-md xl:text-lg font-bold">Extra Information</p>
                <p className="mt-4 text-sm">{description}</p>
            </div>
        </div>
    )

}

export default CarDetails