import Image from "next/image";
import Company from "@/components/icons/Company";
import Model from "@/components/icons/Model";
import Calender from "@/components/icons/Calender";
import Road from "@/components/icons/Road";
import Location from "@/components/icons/Location";
import Money from "@/components/icons/Money";

const CarDetails = (props) => {
    const { id, name, model, year, distance, location, image, price, description } = props;

    return(
        <div className="flex flex-col items-center w-4/5 mx-auto p-10 bg-gray-100">
            <div className="flex gap-10">
                <img className="w-[550px] h-[400px] shadow-md" src={image} alt="img"/>
                <div className="flex flex-col w-[550px] h-[400px] p-10 text-justify bg-[#fff] shadow-md">
                    <h3 className="flex text-2xl font-bold">{name} {model}</h3>
                    <div className="w-[550px] grid grid-cols-2 mt-4 gap-x-16">
                        <div className="flex mt-5 gap-3">
                            <Company />
                            <p className="font-bold">Company:</p>
                            <span className="mt-1 text-sm font-bold text-gray-500">{name}</span>
                        </div>
                        <div className="flex mt-5 gap-3">
                            <Model />
                            <p className="font-bold">Model:</p>
                            <span className="mt-1 text-sm font-bold text-gray-500">{model}</span>
                        </div>
                        <div className="flex mt-5 gap-3">
                            <Calender />
                            <p className="font-bold">First Registration:</p>
                            <span className="mt-1 text-sm font-bold text-gray-500">{year}</span>
                        </div>
                        <div className="flex mt-5 gap-3">
                            <Road />
                            <p className="font-bold">Km Driven:</p>
                            <span className="mt-1 text-sm font-bold text-gray-500">{distance}</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex mt-5 gap-3">
                            <Location />
                            <p className="font-bold">Location:</p>
                            <span className="mt-1 text-sm font-bold text-gray-500">{location}</span>
                        </div>
                    </div>
                    <div className="flex mt-8">
                        <div className="flex gap-2">
                            <Money/>
                            <p className="mt-1 text-lg font-bold">price: </p>
                        </div>
                        <span className="ml-[300px] mt-2 text-lg font-bold text-gray-500">$ {price}</span>
                    </div>
                    <button className="mt-6 p-2 text-gray-100 font-bold bg-amber-500 hover:bg-amber-600 shadow">Buy</button>
                </div>
            </div>
            <div className="mt-12 p-6 text-justify bg-[#fff] shadow-md">
                <p className="text-lg font-bold">Extra Information</p>
                <p className="mt-4">{description}</p>
            </div>
        </div>
    )

}

export default CarDetails