import Image from "next/image";
import Location from "@/components/icons/Location";
import Link from "next/link";

const Card = (props) => {
    const { id, name, model, year, distance, location, image, price } = props;

    return(
        <Link href={`/cars/${id}`}>
            <div className="w-[320px] h-[360px] mx-auto p-4 bg-[#fff] shadow-md">
                <img className="w-[300px] h-[200px]" src={image} alt="img"/>
                <h4 className="mt-4 text-xl font-bold">{`${name} ${model}`}</h4>
                <p className="mt-2 text-gray-500 text-md">{`${year} | ${distance} km`}</p>
                <div className="flex items-center justify-between mt-5">
                    <p className="px-1 bg-amber-500">$ {price}</p>
                    <div className="flex">
                        <p>{location}</p>
                        <Location/>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card