import style from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className = {style.divCard}>
         <button onClick={() => onClose(id)} className = {style.closeButton}>X</button>
         <Link to={`/detail/${id}`}>
         <img className = {style.image} src={image} alt='' /> 
         <h2 className = {style.textName}>{name}</h2>
         <h2 className = {style.text}>{status}</h2>
         <h2 className = {style.text}>{species}</h2>
         <h2 className = {style.text}>{gender}</h2>
         <h2 className = {style.text}>{origin}</h2>
         </Link>
      </div>
   );
}
