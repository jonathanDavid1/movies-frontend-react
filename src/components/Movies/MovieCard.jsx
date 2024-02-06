import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie, selectMovie }) => {

    const { name, image } = movie;

    const isLong = movie.synopsis.length > 120;

    const synopsis = !isLong ? movie.synopsis : movie.synopsis.slice(0, 120)+"..."

    const navigate = useNavigate();

    return (
        <Col>
            <Card 
                style={{height: "100%", cursor: "pointer", backgroundColor: "#1e2129", color: "white"}}  
                onClick={() => navigate(`/movies/${movie.id}`)}
            >
                <Card.Img variant="top" src={image} style={{height: 300, objectFit: "cover", borderRadius: 5}} />
                <Card.Body>
                    <Card.Title style={{color:"#00acc1"}}>{name}</Card.Title>
                    <Card.Text>
                        {synopsis}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MovieCard;