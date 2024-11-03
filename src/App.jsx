import { useState } from "react"
import Banner from "./component/Banner"
import Header from "./component/Header"
import Footer from "./component/Footer"
import Newsletter from "./component/Newsletter"
import TogglingBtn from "./component/TogglingBtn"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() { 
  const[coin, setcoin]=useState(0);
  const[activeBtn,setactiveBtn]= useState(1);
  const[selectedPlayer, setSelectedPlayer]=useState([])
  const[removeplayer, setremoveplayer] =useState([])
 
  
  
  const handleClaimbtn = () =>{
    
     let newcoin = coin+ 1000000
    setcoin(newcoin)
    toast.success('Credit Added to your Account')
    return
  }
  const handleselectPlayer=(id,price,playerid) =>{
   
    if(coin <= price){
      toast.error("Not enough money to buy this player.Claim some Credit")
      return
    }
    else{
     if(selectedPlayer.length > 5){
      toast.warn("Your squad is Full")
      return
     }
     else{
      if(selectedPlayer.find(play => play.playerId ==playerid)){
       toast.warn("Player already selected")
        return
      }
      else{
      const newselectplayer =[...selectedPlayer,id]
      setSelectedPlayer(newselectplayer)
      toast.success(` Congrates ${id.name} is now in your squad`);
      }
      setcoin(coin-price)
     }
    
    }
   

  }
  const handleremove =(id) =>{
    const deleteplayer = selectedPlayer.find(player=> player.playerId ==id)
    const newplayers = selectedPlayer.filter(player => player.playerId !== id)
    setSelectedPlayer(newplayers)
    const curentplayer = [...removeplayer,deleteplayer]
    setremoveplayer(curentplayer)
    toast.warn("Player removed")
    
  }
  
  
   
  
  
  
 
  

  return (
    <>
     <Header coin ={coin}/>
   <section className="w-11/12 mx-auto ">
  
   
   <Banner handleClaimbtn={handleClaimbtn} />
  
   
   <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />
   <TogglingBtn
    activeBtn={activeBtn} 
   setactiveBtn={setactiveBtn} 
   handleselectPlayer={handleselectPlayer}
   selectedPlayer={selectedPlayer}
   
   handleremove={handleremove}
  
   />
   {}
   </section>
   <section className="relative">
   <Newsletter /> 
   <Footer/>
   </section>
    </> 
  )
}

export default App
