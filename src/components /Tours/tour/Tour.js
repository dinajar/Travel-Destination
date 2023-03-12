import Card from 'react-bootstrap/Card';
import Tourr from './Tour.css';
function Tour(props) {
    return (
        <>
            
            <Card style={{ width: '400px' }}  key={props.id}>
                <Card.Body>
                    <Card.Title class="name"> {props.name} </Card.Title>
                    <Card.Img src={props.image} alt={props.name}/>
                </Card.Body>
            </Card>
        </>
    )
}
export default Tour;