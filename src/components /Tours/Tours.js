import './Tours.css'
function ToursFunction(props) {
    return (<>
        {props.Data.map((item) => {
            return (
                <div key={item.id}>
                    <h2> {item.name} </h2>
                    <img src={item.image} alt={item.name}></img>
                </div>
            )
        })}
    </>)
}
export default ToursFunction;