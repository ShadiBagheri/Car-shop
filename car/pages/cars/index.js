import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";
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