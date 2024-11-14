//Module
import Card from "@/components/module/Card";

const CarsPage = ({ data }) => {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center justify-between
         w-3/4 mx-auto gap-6 xl:w-4/5 xl:gap-10 px-8 py-10 bg-gray-100">
            {data.map((car) => (
                <Card kye={car.id} {...car}/>
            ))}
        </div>
    )
}

export default CarsPage