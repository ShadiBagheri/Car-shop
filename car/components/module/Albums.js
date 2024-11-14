import Link from "next/link";

const Albums = () => {
    return(
        <div className="items-center w-[360px] h-[40px] md:w-[550px] md:h-[50px] mb-10 p-2 md:p-4 text-center font-bold bg-amber-500 hover:bg-amber-600">
            <Link href="/cars">
                See All Cars
            </Link>
        </div>
    )
}

export default Albums