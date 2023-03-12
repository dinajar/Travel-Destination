import { useState } from "react";
import { useParams } from "react-router-dom";
import Tour from './TourDetails.css'
const data = require('../../data/db.json');


function Details() {
    const { id } = useParams();
    const filterID = data.filter((item) => item.id === id);

    const [FullInfo, setFullInfo] = useState(false);

    const reset = () => {
        setFullInfo((value) => !value);
    };

    return (


        <div>
          {filterID.map((item) => (
            <div key={item.id} class="card">
              <h2>{item.name}</h2>
              <p>
                {FullInfo ? item.info :item.info.split(' ').slice(0, 10).join(' ')}
                {!FullInfo && '...  '}
                <button onClick={reset}>
                    {FullInfo ? 'See Less' : 'See More'}
                </button>
              </p>
              <img src={item.image} alt={item.name}  class="img"/>
              <p> {item.price} </p>
            </div>
            
          ))}
        </div>


    );





}
            export default Details;