import './Tours.css'
import Tour from './tour/Tour';
import { Link } from 'react-router-dom';
function ToursFunction(props) {
    return (<>
        {props.Data.map((item) => {
            
            return (
                /*<div key={item.id}>
                    <h2> name={item.name} </h2>
                    <img src={item.image} alt={item.name}></img>
                </div>*/
                <Link to = {`/city/${item.id}`} >
                    <Tour key={item.id} name={item.name} image={item.image} />
                </Link>
                
            )
        })}
    </>)
}
export default ToursFunction;