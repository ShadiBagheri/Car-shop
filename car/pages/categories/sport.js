//Data
import carsData from "@/data/carsData";
//Templates
import CarsList from "@/components/templates/CarsList";

const Sport = () => {
    const sportCars = carsData.filter((car) => car.category === "sport");

    return <CarsList data={sportCars}/>
}

export default Sport