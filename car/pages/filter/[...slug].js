import { useRouter } from "next/router";
//Data
import carsData from "@/data/carsData";
//Templates
import CarsList from "@/components/templates/CarsList";

const filteredCars = () => {
    const router = useRouter();
    const [min, max] = router.query.slug || [];

    const filterData = carsData.filter((item) => item.price > min && item.price < max);
    if (!filterData.length) return <h1>NotFound</h1>;

    return <CarsList data={filterData}/>
}

export default filteredCars