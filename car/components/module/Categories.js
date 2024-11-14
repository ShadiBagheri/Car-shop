import Link from "next/link";
//Categories
import Sedan from "@/components/icons/Sedan";
import Suv from "@/components/icons/Suv";
import Hatchback from "@/components/icons/Hatchback";
import Sport from "@/components/icons/Sport";

const Categories = () => {
    return(
        <div className="flex items-center justify-between w-[360px] md:w-[370px] lg:w-[550px] h-[110px] mb-10 mx-auto p-5 bg-[#fff] shadow-md">
            <Link href="/categories/sedan">
                <div className="flex flex-col items-center px-3 py-1 lg:w-[100px] lg:p-3 bg-amber-500  hover:bg-amber-600 shadow">
                    <p className="text-sm font-bold">Sedan</p>
                    <Sedan/>
                </div>
            </Link>
            <Link href="/categories/suv">
                <div className="flex flex-col items-center px-3 py-1 lg:w-[100px] lg:p-3 bg-amber-500 hover:bg-amber-600 shadow">
                    <p className="text-sm font-bold">Suv</p>
                    <Suv/>
                </div>
            </Link>
            <Link href="/categories/hatchback">
                <div className="flex flex-col items-center px-3 py-1 lg:w-[100px] lg:p-3 bg-amber-500 hover:bg-amber-600 shadow">
                    <p className="text-sm font-bold">Hatchback</p>
                    <Hatchback/>
                </div>
            </Link>
            <Link href="/categories/sport">
                <div className="flex flex-col items-center px-3 py-1 lg:w-[100px] lg:p-3 bg-amber-500 hover:bg-amber-600 shadow">
                    <p className="text-sm font-bold">Sport</p>
                    <Sport/>
                </div>
            </Link>
        </div>
    )
}

export default Categories