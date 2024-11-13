import Link from "next/link";

const Layout = ({ children }) => {
    return(
        <>
            <header className="flex flex-col items-center w-4/5 h-[120px] mx-auto py-5 bg-amber-500">
                <Link href="/">
                    <h1 className="my-2 text-center text-3xl text-gray-100 font-bold">Car Shop</h1>
                    <p className="text-center text-xl text-gray-100">Choose and Buy </p>
                </Link>
            </header>
            <div className="mt-10 mb-3">
                {children}
            </div>
            <footer className="flex flex-col items-center w-4/5 h-[20px] mx-auto pt-3 pb-8 bg-amber-500">
                <a className="text-center text-md text-gray-100" href="https://botostart.ir" target="_blank">
                    Car Project with Next.js &copy
                </a>
            </footer>
        </>
    )
}

export default Layout