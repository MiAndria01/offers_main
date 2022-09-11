import React from "react";
import "../styles/Modal.css";
import { MultiStepProgressBar } from "./MultiStepProgressBar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { MultiStepForm } from "./MultiStepForm";
import { questions } from "./Questions";

function AnnonceForm({ setOpenModal }) {
    const [index, setIndex] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const totalPagesCount = questions?.length || 0;
    // numbered by pages. for exampe { 1: [{"key" : "value"}], 2:["key": "value"], 3: ["key": "value"], 4: []}
    const [pagesAnswers, setPagesAnswers] = useState({});
  
    const prevButton = () => {
      if (index > 1) {
        setIndex(prevIndex => prevIndex - 1);
      }
    }
  
    const nextButton = () => {
      if (index - 4) {
        setIndex(prevIndex => prevIndex + 1);
      } else {
        // clear the form on submit
        setPagesAnswers({});
        setSubmitted(true);
      }
    }
  
    const onPageAnswerUpdate = (step, answersObj) => {
      setPagesAnswers({...pagesAnswers, [step]: answersObj});
    }
  
    const handleStart = () => {
      setIndex(1);
      setSubmitted(false);
    }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <Container className="h-100">
        <Row className="m-5">
          <Col className="align-self-center">
            <MultiStepProgressBar
              step={index}
              />
          </Col>
        </Row>
        <Row>
          {
            submitted ?
            <Card>
              <Card.Body>
                <p>Covoiturage bien publier!</p>
              </Card.Body>
              <Card.Footer>
                <Button onClick={handleStart}>Start Over</Button>
              </Card.Footer>
            </Card> :
          <Card>
            <Card.Body>
              <MultiStepForm
                list={questions}
                step={index}
                onPageUpdate={onPageAnswerUpdate}
                pagesAnswers={pagesAnswers}
                />
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
              <Button onClick={prevButton} disabled={index == 1}>Retour</Button>
              <Button onClick={nextButton}>{index == totalPagesCount ? 'Publier' : 'Continuer'}</Button>
            </Card.Footer>
          </Card>
        }
        </Row>
      </Container>
      </div>
    </div>
  );
}

export default AnnonceForm;