import Image from "next/image"
import Link from "next/link"
export default function Navbar(){
    return(
           <div className="bg-black">
<div className="w-4/5 ml-48 py-4 flex justify-between bg-slate-950 rounded-md text-white h-6 items-center  ">
<Link href=""><p> Download App via SMS</p></Link>
<div className="mr-8">
<button className="bg-black p-px px-2">Sign Up</button>
<button className="bg-black p-px px-2">Sign In</button>
</div>

           </div>
           
           <nav className="flex gap-10 text-sm justify-center mt-2 w-full h-20 p-8 ml-2 items-center bg-black text-white" >
               
            <div className="w-40 mt-7 h-20">
<Link href="/"><img src="/Pakwheellogo.jpg" /></Link>
            </div>
            <Link href="">Used Cars</Link>
            <Link href="">New Cars</Link>
            <Link href="">Bikes</Link>
            <Link href="">Auto Store</Link>
            <Link href="">Videos</Link>
            <Link href="">Forums</Link>
            <Link href="">Blogs</Link>
            <Link href="">More</Link>

            <button className="bg-red-700 p-2 px-4 rounded-sm">Post an add</button>

            </nav>



</div>
        
    )
}