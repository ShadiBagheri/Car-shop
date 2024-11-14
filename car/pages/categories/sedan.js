//Data
import carsData from "@/data/carsData";
//Templates
import CarsList from "@/components/templates/CarsList";

const Sedan = () => {
    const sedanCars = carsData.filter((car) => car.category === "sedan");

    return <CarsList data={sedanCars}/>
}

export default Sedan