
import { useDispatch } from 'react-redux'
import './Compo.css'
import { addToCart } from '../store/slices/CartSlice'


export default function CarCard({ car }) {

  const dispatch = useDispatch()


  return (
    <div className='car-card'>
      <div className='card-img-div'>
        <img src={car.image} alt='' />
      </div>
      <h3>{car.name}</h3>
      <p><strong>Price : $</strong> {car.price}</p>
      <p><strong>CC : </strong> {car.cc}</p>
      <p><strong>Mileage : </strong> {car.mileage}</p>
      <button onClick={() => dispatch(addToCart(car))}>Add To Cart</button>
    </div>
  )
}
