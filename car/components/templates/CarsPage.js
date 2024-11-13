import Card from "@/components/module/Card";

const CarsPage = ({ data }) => {
    return(
        <div className="grid grid-cols-3 items-center justify-between w-4/5 mx-auto px-8 py-10 gap-10 bg-gray-100">
            {data.map((car) => (
                <Card kye={car.id} {...car}/>
            ))}
        </div>
    )
}

export default CarsPage