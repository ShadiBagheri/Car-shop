//Data
import carsData from "@/data/carsData";
//Module
import SearchBox from "@/components/module/SearchBox";
import Categories from "@/components/module/Categories";
import Albums from "@/components/module/Albums";
//Templates
import CarsPage from "@/components/templates/CarsPage";

export default function Home() {
    const cars = carsData.slice(0, 3);

    return (
        <div className="flex flex-col items-center mx-auto">
            <SearchBox/>
            <Categories/>
            <Albums/>
            <CarsPage data={cars}/>
        </div>

    );
}
