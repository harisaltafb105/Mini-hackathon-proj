import Link from "next/link"
export default function Cardetails(){
    return(<div className="flex flex-col items-center gap-2 p-7 h-screen w-full bg-sky-100" >

<div className="w-8/12  ">
<h2 className="font-bold text-3xl text-center underline"> Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs </h2>
</div>

<div className=" w-4/12 ">
    <img src="/Toyotacorolla1.jpg"/>
</div>

<div className=" w-9/12 text-sm text-center ">
   <Link href="/cardetail01"> <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae accusantium ad dignissimos perspiciatis dicta dolorem quaerat praesentium nobis placeat similique voluptatem architecto mollitia, aliquam nemo cupiditate cumque. Minima, error illo.
    Ut facilis repudiandae doloremque asperiores quos obcaecati molestias iste dolores adipisci iure unde fugit reiciendis praesentium earum quibusdam iusto, voluptatem ea repellat consequuntur ullam nesciunt corrupti rerum! Officiis, eius incidunt. </p> </Link></div>
<p className="text-green-500 font-semibold text-lg text-center  "> PKR 50,00,000 </p>


<Link href="/checkout"><button className=" mt-2 py-2 px-2 rounded-sm
                 bg-blue-700 text-white  text-sm">Make Payment </button></Link>

    </div>


    )
}