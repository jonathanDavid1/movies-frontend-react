import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import ButtonsEditDelete from '../ButtonsEditDelete';
import { deleteDirectorThunk } from '../../store/slices/directors.slice'
import formatDate from '../../utils/formatDate';

const DirectorCard = ({ director, selectDirector, showOptions=true }) => {

    const { id, image, firstName, lastName, nationality } = director;

    const birthday = formatDate(director.birthday)

    const dispatch = useDispatch();

    return (
        <Col>
            <Card style={{height: "100%", backgroundColor:"#1e2129"}}>
                <Card.Img variant="top" src={image} style={{ height: 300, objectFit: "cover" }} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title style={{color:"#00acc1"}}>{firstName} {lastName}</Card.Title>
                    <div className="flex-fill" style={{color:"white"}}>
                        <div><b style={{color:"#00acc1"}}>birthday: </b>{birthday}</div>
                        <div><b style={{color:"#00acc1"}}>Nationality: </b>{nationality}</div>
                    </div>
                    {showOptions && (
                        <ButtonsEditDelete 
                            onDelete={() => dispatch(deleteDirectorThunk(id))}
                            onUpdate={() => selectDirector(director)}
                        />
                    )}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default DirectorCard;