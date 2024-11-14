import { useState}  from "react";
import { useRouter } from "next/router";

const SearchBox = () => {
    const router = useRouter();
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");

    const searchHandler = () => {
        if (min && max){
            router.push(`/filter/${min}/${max}`);
        }else {
            alert("Please enter minimum and maximum price!");
        }
    }

    return(
        <div className="flex items-center justify-between w-[360px] md:w-[370px] lg:w-[550px] h-[110px] mb-10 mx-auto p-5 shadow-md">
            <div className="flex flex-col">
                <input className="w-[210px] md:w-[220px] lg:w-[400px] h-[30px] mb-1 px-3 border-solid border-2 border-amber-300 bg-gray-100 outline-none"
                       placeholder="Enter min-price"
                       value={min}
                       onChange={(e) => setMin(e.target.value)}
                />
                <input className="w-[210px] md:w-[220px] lg:w-[400px] mt-2 px-3 border-solid border-2 border-amber-300 bg-gray-100 outline-none"
                       placeholder="Enter max-price"
                       value={max}
                       onChange={(e) => setMax(e.target.value)}
                />
            </div>
            <button className="p-6 font-bold bg-amber-500 hover:bg-amber-600" onClick={searchHandler}>Search</button>
        </div>
    )
}

export default SearchBox