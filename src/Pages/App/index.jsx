import { BrowserRouter,Route,Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { useMediaQuery } from "@mui/material"

import  { Acount } from "../Acount"
import { Home } from "../Home"
import { NotFound } from "../NotFound"
import { Order } from "../Order"
import { Orders } from "../Orders"
import { Sign} from "../Sign"
import {Navbar} from "../../Components/Navbar";
import { Navmobile } from "../../Components/Navbar_mobile"
import { Mens } from "../Mens"
import { Womens } from "../Womens"
import { Ecoprovider} from "../../Context"
import { Electronics } from "../Electronic"
import {Jewerly} from "../Jewerly"
import { Menumo } from "../../Components/Menu_mobile"


import './App.css'



function App() {
 
  const isLargeScreen = useMediaQuery('(min-width: 850px)');

  return (
    <>
        <Ecoprovider>
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />}/> 
                <Route path="/acount" element={<Acount/>}/>   
                <Route path="/*" element={<NotFound />}/>  
                <Route path="/orders/:last/" element={<Order />}/>  
                <Route path="/orders/:index/" element={<Order />}/> 
                <Route path="/orders" element={<Orders />}/>  
                <Route path="/sign" element={<Sign />}/>  
                <Route path="/mens" element={<Mens />}/>
                <Route path="/womens" element={<Womens />}/>
                <Route path="/jewerly" element={<Jewerly />}/>
                <Route path="/electronics" element={<Electronics />}/>
              </Routes>
              
              
              {!isLargeScreen?<Navmobile/>:<Navbar/>}
              <Menumo></Menumo>
          </BrowserRouter>
          <Toaster></Toaster>
        </Ecoprovider>
    </>
  )
}

export default App
