//Data
import carsData from "@/data/carsData";
//Templates
import CarsPage from "@/components/templates/CarsPage";
//Module
import Categories from "@/components/module/Categories";
import SearchBox from "@/components/module/SearchBox";

const Details = () => {
    return(
        <>
            <SearchBox/>
            <Categories/>
            <CarsPage data={carsData}/>
        </>
    )
}

export default Details