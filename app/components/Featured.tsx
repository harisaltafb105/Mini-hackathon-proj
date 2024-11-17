import Image from "next/image"
import Link from "next/link"
export default function Featured(){
    return(
        <div className="bg-blue-100 mt-32">
            <h2 className="text-lg font-semibold pt-10 ml-24"> Featured New Cars </h2>
            <nav className="mt-5 ml-24 font-semibold flex gap-6">
            <Link href="">Popular</Link>
            <Link href="">Upcoming</Link>
            <Link href="">Newly Launched</Link>
         </nav>
         
         <div className="flex gap-5 mt-20 ml-24 w-10/12  justify-around ">
            <div className=" w-96 bg-white pt-6 " ><Link href="/cardetail1"><img src="/Toyotacorolla.jpg"/></Link>
            <p className="text-center mt-7 text-blue-500 font-semibold"> Toyota Corolla </p> 
            <p className="text-green-400 font-semibold text-center mt-3"> PKR 59.7 - 75.7 lacs </p>
            <p className="text-blue-600 font-medium text-center mt-3"> 621 Reviews</p>
            </div>
            <div className="w-96 bg-white p-7"><Link href="/cardetail2"><img src="/Suzuki-alto.jpg"/> </Link>
            <p className="text-center mt-4 text-blue-500 font-semibold"> Suzuki Alto </p> 
            <p className="text-green-400 font-semibold text-center mt-3"> PKR 23.3 - 30.5 lacs </p>
            <p className="text-blue-600 font-medium text-center mt-3"> 199 Reviews</p>
             </div>
            <div className="w-96 bg-white pt-7"><Link href="/cardetail3"><img src="/Hondacity.jpg"/> </Link>
            <p className="text-center mt-2 text-blue-500 font-semibold"> Honda City </p> 
            <p className="text-green-400 font-semibold text-center mt-3"> PKR 46.5 - 58.5 lacs </p>
            <p className="text-blue-600 font-medium text-center mt-3"> 458 Reviews</p> 
            
            </div>
            <div className="w-96 bg-white pt-4"><Link href="/cardetail4"><img src="/honda-civic.jpg"/> </Link>
            <p className="text-center mt-4 text-blue-500 font-semibold"> Honda Civic </p> 
            <p className="text-green-400 font-semibold text-center mt-4"> PKR 86.6 - 99.0 lacs </p>
            <p className="text-blue-600 font-medium text-center mt-4"> 357 Reviews</p>
            
             </div>
            
        </div>



        </div>
    )
}