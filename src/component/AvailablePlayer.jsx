import { useEffect, useState } from "react";
import Players from "./Players";
import PropTypes from 'prop-types'


const AvailablePlayer = ({handleselectPlayer}) => {
    const [players, setplayers] = useState([])
    useEffect(() =>{
        fetch("/player.JSON")
        .then(res=>res.json())
        .then(data=>setplayers(data))
    },[])
    
    return (
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {
                players.map((player,idx)=><Players key={idx}
                 player={player} 
                handleselectPlayer={handleselectPlayer}
               />)
            }
            
        </div>
    );
};

AvailablePlayer.propTypes = {
    handleselectPlayer: PropTypes.func.isRequired,
   
}

export default AvailablePlayer;


