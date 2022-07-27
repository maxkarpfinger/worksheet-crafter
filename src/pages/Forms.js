import * as React from 'react';
import Triangle from '../images/shape_triangle.png'
import Square from '../images/shape_square.png'
import Circle from '../images/shape_circle.png'


const Forms = () => {
    const items = [
        {name: 'square', image: Square},
        {name: 'circle', image: Circle},
        {name: 'triangle', image: Triangle}
    ]
    return (
        <div className="mt-4">
            {
                items.map((item, index) => <li key={index} draggable className="mt-2 ms-2 shadow w-25">
                    <img src={item.image} alt={item.name} width="50" height="50"/>
                </li>)
            }
        </div>
  )
}

export default Forms;