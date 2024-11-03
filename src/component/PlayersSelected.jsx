import PropTypes from 'prop-types'
import { MdDeleteForever } from "react-icons/md";
const PlayersSelected = ({playerselect,handleremove}) => {
    
    const{name,battingType,image,biddingPrice,playerId} = playerselect;
    return (
        <div>
            <div className='flex justify-between items-center gap-5 border rounded-lg p-4'>
               <div className='flex items-center gap-5 '>
               <img className='w-20 rounded-lg' src={image} alt="" />
               <div>
               <h4 className='text-xl font-semibold'>{name}</h4>
               <p className='text-[#13131399]'>{battingType}</p>
               <p>${biddingPrice}</p>
               </div>
               </div>
            
               
              
               <button onClick={()=>handleremove(playerId)}><MdDeleteForever className='text-2xl text-red-600 '/></button>
              
              
            </div>
            
        </div>
    );
};
PlayersSelected.propTypes = {
    playerselect: PropTypes.object,
    handleremove:PropTypes.func.isRequired,

}

export default PlayersSelected;