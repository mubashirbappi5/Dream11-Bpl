
import PropTypes from 'prop-types'
import { FaFlag } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
const Players = ({player,handleselectPlayer}) => {
  
    const {name,country,image,role,battingType,bowlingType,biddingPrice,playerId} = player;
    return (
        <div>
            
            <div className="card bg-base-100 w-96 border">
  <figure className="px-5 pt-5">
    <img
      src={image}
      
      className="rounded-xl w-80 h-40" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title mb-3"><FaCircleUser />{name}</h2>
    <div className='flex justify-between items-center text-[#13131399]'>
        <p className='flex gap-1 items-center'><FaFlag />{country}</p>
        <h4 className='bg-[#1313130D] text-right px-3 rounded-md '>{role}</h4>
    </div>
   <div className="divider"></div>
    <h3 className='text-lg font-bold'>Rating</h3>
    <div className='flex justify-between  font-medium '>
        <h4>{battingType}</h4>
        <h4 className='text-[#13131399]'>{bowlingType}</h4>
    </div>
    
    <div className="card-actions flex items-center">
    <p className='font-semibold'> Price ${biddingPrice}</p>
      <button onClick={()=>{handleselectPlayer(player,biddingPrice,playerId)}} className="btn bg-transparent border rounded-lg hover:bg-btnColor hover:border-btnColor">Choose Player</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

Players.propTypes = {
    player: PropTypes.object.isRequired,
    handleselectPlayer: PropTypes.func.isRequired,
   
}

export default Players;