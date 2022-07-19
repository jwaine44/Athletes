import React, {useState, useEffect} from 'react';
import DeleteButton from '../components/DeleteButton';
import Form from '../components/Form';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditView = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [athlete, setAthlete] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/athletes/${id}`)
            .then(response => {
                setAthlete(response.data)
                setLoaded(true);
            })
            .catch(err => {
                console.log(err)
            });
    })

    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/athletes/${id}`, data)
            .then(response => {
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <h1>Editing {athlete.firstName} {athlete.lastName}</h1>
            {loaded &&
                <Form onSubmitHandler = {onSubmitHandler} 
                initialFirstName = {athlete.firstName}
                initialLastName = {athlete.lastName}
                initialSport = {athlete.sport}
                initialTeam = {athlete.team}
                />
            }
            <DeleteButton />
        </div>
    )
}

export default EditView