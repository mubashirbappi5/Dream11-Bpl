
import AvailablePlayer from "./AvailablePlayer";
import SelectedPlayer from "./SelectedPlayer";
import PropTypes from 'prop-types'

const TogglingBtn = ({setactiveBtn,activeBtn,handleselectPlayer,selectedPlayer,handleremove}) => {
    
   
    return (
        <div>
            <div className="flex justify-between items-center mt-14 mb-5 ">
               {activeBtn===1&& <h1 className="text-xl  font-bold">Available Players</h1>}
               {activeBtn===2&& <h1 className="text-xl  font-bold">Selected Player ({selectedPlayer.length}/6) </h1>}
               
                <div className="">
                <button onClick={()=>setactiveBtn(1)} className={`px-4 py-2 rounded-l-md  border ${activeBtn==1 ? "bg-btnColor  border-btnColor" :"bg-transparent"}`}>Available</button>
                <button onClick={()=>setactiveBtn(2)}
                className={`px-4 py-2 rounded-r-md border ${activeBtn==2 ? "bg-btnColor  border-btnColor" :"bg-transparent"}`}>Selected ({selectedPlayer.length})</button>
                </div>
            </div>
            <div>
            {activeBtn===1  &&<AvailablePlayer handleselectPlayer={handleselectPlayer} />}
            {activeBtn ===2 && <SelectedPlayer selectedPlayer={selectedPlayer} 
            setactiveBtn={setactiveBtn} handleremove={handleremove} />}
            


            </div>
              
               

            
            
        </div>
    );
};
TogglingBtn.propTypes={
    setactiveBtn: PropTypes.func.isRequired,
      activeBtn: PropTypes.number.isRequired,
    handleselectPlayer:PropTypes.func.isRequired,
    selectedPlayer: PropTypes.array,
    
    
   
    handleremove:PropTypes.func.isRequired,
}

export default TogglingBtn;