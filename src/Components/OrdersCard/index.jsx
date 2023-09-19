import {IoIosArrowRoundForward} from "react-icons/io"
import {AiTwotoneShopping} from "react-icons/ai"
import {BsCalendar2WeekFill} from "react-icons/bs"
import { Link } from "react-router-dom"
export function OrdesCard(data,indice){
   
   
    return(
        <div className="flex justify-between items-center  mb-4 gap-8 w-96 rounded-lg border-solid border-2 border-black bg-zinc">
            <div className="flex flex-col gap-2 my-4 ml-4 ">
                <div className="flex gap-3">
                    <AiTwotoneShopping></AiTwotoneShopping>
                    <p className="text-xs font-bold">{data.data.totalproducts} products</p>
                </div>
                <div className="flex gap-3 ">
                    <BsCalendar2WeekFill></BsCalendar2WeekFill>
                    <p className="text-xs font-bold">{data.data.date}</p>
                </div>
                
            </div>
            <div className="flex  gap-2 mr-4">
                
                <p className="text-lg font-bold">$ {data.data.Totalprice}</p>
                <Link to={`/orders/${data.indice}/`}>
                <IoIosArrowRoundForward className="mt-2"/>
                </Link>
                
            </div>
        </div>
    )
}