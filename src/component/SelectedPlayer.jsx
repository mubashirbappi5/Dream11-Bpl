import PropTypes from 'prop-types'
import PlayersSelected from './PlayersSelected';



const SelectedPlayer = ({selectedPlayer,setactiveBtn,handleremove}) => {
   
    
    
    return (
        <div className="space-y-5">
           
            {
                selectedPlayer.map((playerselect,idx)=> <PlayersSelected key={idx} playerselect={playerselect} handleremove={handleremove}/>)
            } 
           
            <button onClick={()=>setactiveBtn(1)} className="  btn bg-transparent hover:bg-btnColor border border-black p-0"><p className="bg-btnColor mx-1 px-3 py-3 rounded-lg">Add More Player</p></button>
           
            
        </div>
    );
};

SelectedPlayer.propTypes = {
    selectedPlayer: PropTypes.array.isRequired,
    
    setactiveBtn: PropTypes.func.isRequired,
    handleremove:PropTypes.func.isRequired,
};

export default SelectedPlayer;