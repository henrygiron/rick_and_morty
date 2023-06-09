import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav} from '../../redux/actions'
import { connect } from 'react-redux';
import {useState, useEffect} from 'react';

function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {


   const [isFav, setIsFav] = useState(false);
   
   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false);
         removeFav(id);
      } else{
         setIsFav(true);
         addFav({id, name, status, species, gender, origin, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
     <div className={style.divCard}>
      <button onClick={handleFavorite}>{isFav ? '❤️':'🤍'}</button>
       <button onClick={() => onClose(id)} className={style.closeButton}>
         X
       </button>
       <Link to={`/detail/${id}`}>
         <img className={style.image} src={image} alt="" />
         <h2 className={style.textName}>{name}</h2>
         <h2 className={style.text}>{status}</h2>
         <h2 className={style.text}>{species}</h2>
         <h2 className={style.text}>{gender}</h2>
         <h2 className={style.text}>{origin}</h2>
       </Link>
     </div>
   );
}


const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}


const mapDispatchToProps = (dispatch) => {
   return{
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps, 
   mapDispatchToProps
   )(Card);