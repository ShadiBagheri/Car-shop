import Link from "next/link";
//Icons
import Location from "@/components/icons/Location";


const Card = (props) => {
    const { id, name, model, year, distance, location, image, price } = props;

    return(
        <Link href={`/cars/${id}`}>
            <div className="w-[400px] h-[400px] md:w-[500px] md:h-[450px] lg:w-[320px] lg:h-[360px] xl:w-[290px] xl:h-[350px] mx-auto p-4 bg-[#fff] shadow-md">
                <img className="w-[370px] h-[240px] md:w-[470px] md:h-[300px] lg:w-[300px] lg:h-[200px] xl:w-[280px] xl:h-[180px]" src={image} alt="img"/>
                <h4 className="mt-3 lg:mt-4 text-xl font-bold">{`${name} ${model}`}</h4>
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