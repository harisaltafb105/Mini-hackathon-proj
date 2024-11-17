import Link from "next/link"
export default function Checkout(){
    return(<div className="h-screen w-full bg-sky-100">
<h1 className="text-5xl font-semibold text-center  pt-8">
                Enter your Details
            </h1>

            <div>
            <form className="mt-10 flex gap-5 justify-center items-center flex-col border">
                <input type="text" className="p-2 rounded-2xl w-2/5 border border-black"
                 placeholder="Enter your Name" />

                <input type="email" className="p-2 rounded-2xl w-2/5 border border-black" 
                placeholder="Enter your Email" />

<input type="password" className="p-2 rounded-2xl w-2/5 border border-black" 
                placeholder="Enter your Card Number" />

<input type="text" className="p-2 rounded-2xl w-2/5 border border-black" 
                placeholder="Enter your Address" />



               <Link href="/thankyou"> <button className=" py-3 px-7 rounded-lg 
                 bg-blue-700 text-white mt-5">Place your order</button></Link>
            </form>
            </div>
        
        </div>
    )
}

    
