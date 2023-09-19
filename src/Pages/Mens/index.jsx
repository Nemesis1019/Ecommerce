import { Layout } from "../../Components/Layout";
import { useContext } from "react";
import { EcoContext } from "../../Context";
import { Card } from "../../Components/Card";
import { useEffect } from "react";
import {BiSearchAlt2} from "react-icons/bi"
import { Checkout } from "../../Components/Checkout"
import { Detail } from "../../Components/Detail"

 export function Mens(){
    const {det,shop,Item,Filtred,setFiltred,setSearch,Search,Ultimo,setUltimo} = useContext(EcoContext)

    const filterElectronics=(Item)=>{
       const array= Item?.filter((item)=>item.category.toLowerCase().includes("men's clothing"))
       return array?.filter((item)=>!item.category.toLowerCase().includes("women's clothing"))
        
    }
    const fiterSearchMens=(Item,Search)=>{
        const array= Item?.filter((item)=>item.category.toLowerCase().includes("men's clothing"))
       const array2= array?.filter((item)=>!item.category.toLowerCase().includes("women's clothing"))
       return array2?.filter((item)=>item.title.toLowerCase().includes(Search.toLowerCase()))
       
       
    }
    useEffect(()=>{  setUltimo(fiterSearchMens(Item,Search),setFiltred(filterElectronics(Item)))
    },[Item,Search])
   

    const renderView = () => {
        
        const itemsto=Search.length>0?Ultimo:Filtred
        
        if (itemsto?.length > 0) {
          return itemsto.map(item => (
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
            <div className="  grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full ml-5 max-w-screen-lg mt-4 ">
                {renderView()}   
            </div>
            {det?<Detail />:null}
            {shop?<Checkout/>:null}
        </Layout>
    )
}