import { useRouter } from "next/router";
import Card from "@/components/module/Card";
import Back from "@/components/icons/Back";

const CarsList = ({ data }) => {
    const router = useRouter();

    const backHandler = () => {
        router.back();
    }

    return(
        <div className="flex flex-col items-center w-4/5 h-4/5 mx-auto p-10 bg-gray-100">
            <div className="flex items-center p-3 mb-10 mr-[1010px] bg-amber-500 hover:bg-amber-600 gap-2 cursor-pointer shadow" onClick={backHandler}>
                <Back/>
                <p className="text-xl font-bold">back</p>
            </div>
            <div className="grid grid-cols-3 gap-20">
                {data.map((car) => (
                    <Card key={car.id} {...car}/>
                ))}
            </div>
        </div>
    )
}

export default CarsList