import './Home.css';
import Header from '../Header/Header';
import Tours from '../Tours/Tours';
import Footer from '../Footer/Footer';
const data = require('../../data/db.json');


function HomeFunction(){
    return(
        <>
        <Header />
        <Tours Data ={data}/>
        <Footer />
        </>
    )
}
export default HomeFunction;