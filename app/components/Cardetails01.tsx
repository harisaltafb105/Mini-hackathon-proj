import Link from "next/link"
export default function Cardetails02(){
    return(<div className="flex flex-col items-center gap-2 p-7 h-screen w-full bg-sky-100" >

<div className="w-8/12  ">
<h2 className="font-bold text-3xl text-center underline"> Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs </h2>
</div>

<div className=" ml-20 w-4/12 ">
    <img src="/Toyotacorolla1.jpg"/>
</div>
<div className="flex gap-1 items-center">
    <button className=" mt-2 py-2 px-2 rounded-sm
                 bg-white text-blue-700  text-sm border border-blue-700">Book a Test Drive </button>
     <button className=" mt-2 py-2 px-2 rounded-sm
                 bg-white text-blue-700 border border-blue-700 text-sm">Request Bank finance </button>
     <button className=" mt-2 py-2 px-2 rounded-sm
                 bg-white text-blue-700 border border-blue-700 text-sm">Visit Place </button>                        
      <button className=" mt-2 py-2 px-2 rounded-sm
                 bg-white text-blue-700 border  border-blue-700 text-sm">Car Inspection </button>           
        </div>

<div className=" w-9/12 text-sm text-center ">
    <p className="font-semibold ">Vehicle Description </p></div>
<div className="text-center w-8/12"><pre className="font-semibold text-sm text-center  "><b>Number of Doors</b> 4  <b>Engine</b> 1800 cc <b> Condition </b> 8.5 / 10  <b> Driven </b> 9,500 Km <b> Suspension type</b> Soft Suspension 
<br/><b> Avg</b> 13 Km / Ltr <b> Transmission</b> Automatic <b> Fuel Type</b> High Octane </pre> 
</div>


<Link href="/checkout"><button className=" mt-2 py-2 px-2 rounded-sm
                 bg-blue-700 text-white  text-sm">Make Payment </button></Link>

    </div>


    )
}