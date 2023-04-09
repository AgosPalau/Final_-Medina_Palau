import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {

  const { state, dispatch } = useContext(ContextGlobal);
  const addFav = (dentist) => {
    dispatch({ type: "addDentistFav", dentist })
  }
  const fav = state.favsDentists.find((dentist) => dentist.id === id);
  return (
    <div className="card">
      <Link to={`/detail/${id}`}>
        <div>
          <img className="imgDoc" src="../images/doctor.jpg" alt="doctor" width="210x" height="210px" />
          <h4>{id} - {name}</h4>
          <h5>{username}</h5>
        </div>
      </Link>
      <div>
        <button onClick={() => addFav({ id: id, name: name, username: username })} disabled={fav}>Añadir a favoritos</button>
      </div>
    </div>
  );
};

export default Card;
