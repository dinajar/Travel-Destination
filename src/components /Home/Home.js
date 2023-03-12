import './Home.css';
import Tours from '../Tours/Tours'; 
import Footer from '../Footer/Footer';
const data = require('../../data/db.json');


function HomeFunction(){
    return(
        <div>
        <Tours Data ={data}/>
        <Footer />
        </div>
    )
}
export default HomeFunction;