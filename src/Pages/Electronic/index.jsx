import { Layout } from "../../Components/Layout";
import { useContext } from "react";
import { EcoContext } from "../../Context";
import { Card } from "../../Components/Card";
import { useEffect } from "react";
import {BiSearchAlt2} from "react-icons/bi"
import { Checkout } from "../../Components/Checkout"
import { Detail } from "../../Components/Detail"
export function Electronics(){
  const {det,shop,Item,Filtred,setFiltred,Search,setSearch,Ultimo,setUltimo} = useContext(EcoContext)

    const filterElectronics=(Item)=>{
       return Item?.filter((item)=>item.category.toLowerCase().includes("electronics"))
        
        
    }
    const FilterSearchElectronics=(Item,Search)=>{
      const jew=Item?.filter((item)=>item.category.toLowerCase().includes("electronics"))
      return jew.filter((item)=>item.title.toLowerCase().includes(Search.toLowerCase()))
    }
    useEffect(()=>{ setFiltred(filterElectronics(Item),setUltimo(FilterSearchElectronics(Item,Search)))

    },[Item,Search])

    const renderView = () => {
        
        const total=Search.length>0?Ultimo:Filtred
        if (total?.length > 0) {
          return total.map(item => (
            <Card key={item.id} data={item} />
          ));
        } else {
          return <p>No Results Found</p>;
        }
      };

    return(
        <Layout>
            <div className="flex gap-2">
            <input className="rounded-lg text-center" onChange={(event)=>setSearch(event.target.value)} placeholder="Ingresa el nombre" ></input>
            <BiSearchAlt2 className="mt-1"/>
          </div>
            <div className=" grid gap-4 grid-cols-3 w-full ml-5 max-w-screen-lg mt-4">
                {renderView()}
            </div>
            {det?<Detail />:null}
            {shop?<Checkout/>:null}
        </Layout>
    )
}