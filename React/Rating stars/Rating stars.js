import StarRating from '../star-rating';
import './App.css';                              

function App(){
    return ( 
        <div className='App'>
            
            <StarRating noOfStars={10} />
        </div> 
    );
    
}

export default App;