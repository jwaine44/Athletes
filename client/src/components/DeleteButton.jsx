import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DeleteButton = props => {
    const {id} = props;
    const navigate = useNavigate();

    const onClickHandler = e => {
        axios.delete(`http://localhost:8000/api/athletes/${id}`)
            .then(response => {
                console.log(response);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            })
    }

  return (
    <div>
        <button onClick = {onClickHandler}>Delete</button>
    </div>
  )
}

export default DeleteButton