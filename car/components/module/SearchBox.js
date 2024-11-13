const SearchBox = () => {
    return(
        <div className="flex items-center justify-between w-[550px] h-[110px] mb-10 mx-auto p-5 shadow-md">
            <div className="flex flex-col">
                <input className="w-[400px] h-[30px] mb-1 px-3 border-solid border-2 border-amber-300 bg-gray-100 outline-none" placeholder="Enter min-price"/>
                <input className="w-[400px] h-[30px] mt-2 px-3 border-solid border-2 border-amber-300 bg-gray-100 outline-none" placeholder="Enter max-price"/>
            </div>
            <button className="p-6 bg-amber-500 hover:bg-amber-600">Search</button>
        </div>
    )
}

export default SearchBox