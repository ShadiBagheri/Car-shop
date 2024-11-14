import { useRouter } from "next/router";
//Module
import Card from "@/components/module/Card";
//Icons
import Back from "@/components/icons/Back";

const CarsList = ({ data }) => {
    const router = useRouter();

    const backHandler = () => {
        router.back();
    }

    return(
        <div className="flex flex-col items-center w-3/4 xl:w-4/5 h-4/5 mx-auto py-10 px-5 bg-gray-100">
            <div className="flex items-center p-3 mb-10 mr-[290px] md:mr-[390px] lg:mr-[600px] xl:mr-[880px] bg-amber-500 hover:bg-amber-600 gap-2 cursor-pointer shadow" onClick={backHandler}>
                <Back/>
                <p className="text-xl font-bold">back</p>
            </div>
            <div className="grid items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16">
                {data.map((car) => (
                    <Card key={car.id} {...car}/>
                ))}
            </div>
        </div>
    )
}

export default CarsList