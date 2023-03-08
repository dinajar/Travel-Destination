import './Home.css';
import Header from '../Header/Header';
import Tours from '../Tours/Tours';
import Footer from '../Footer/Footer';
const data = require('../../data/db.json');


function HomeFunction(){
    return(
        <div>
        <Header />
        <Tours Data ={data}/>
        <Footer />
        </div>
    )
}
export default HomeFunction;