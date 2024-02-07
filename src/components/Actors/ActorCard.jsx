import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import ButtonsEditDelete from '../ButtonsEditDelete';
import { deleteActorThunk } from '../../store/slices/actors.slice';
import formatDate from '../../utils/formatDate';

const ActorCard = ({ actor, selectActor, showOptions=true }) => {

    const { id, image, firstName, lastName, nationality } = actor;

    const birthday = formatDate(actor.birthday);

    const dispatch = useDispatch();

    return (
        <Col>
            <Card style={{height: "100%", color: "white", backgroundColor: "#1e2129"}}>
                <Card.Img variant="top" src={image} style={{ height: 300, objectFit: "cover" }} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title style={{color:"#00acc1"}}>{firstName} {lastName} </Card.Title>
                    <div className="flex-fill">
                        <div><b style={{color:"#00acc1"}}>birthday: </b>{birthday}</div>
                        <div><b style={{color:"#00acc1"}}>Nationality: </b>{nationality}</div>
                    </div>
                    {
                        showOptions && (
                            <ButtonsEditDelete 
                                onDelete={() => dispatch(deleteActorThunk(id))}
                                onUpdate={() => selectActor(actor)}
                            />
                        )
                    }
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ActorCard;