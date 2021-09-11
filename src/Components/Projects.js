import { Card, Button } from "react-bootstrap";
import project_one from '../Images/project_one.jpg';
import project_two from '../Images/project_two.jpg';
import '../styles.css';

export default function Projects() {

    return(
        <div className="container-fluid projects-container">
            <h2>Projects</h2>
            <br/>
            <div className="row">
                <div className="col">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={project_one} />
                        <Card.Body>
                            <Card.Title>Project 1</Card.Title>
                            <Card.Text>
                                This is Project 1. Oh how cool!
                            </Card.Text>
                            <Card.Link href="#">GitHub Repo</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={project_two} />
                        <Card.Body>
                            <Card.Title>Project 2</Card.Title>
                            <Card.Text>
                                This is Project 2. Even cooler!
                            </Card.Text>
                            <Card.Link href="#">GitHub Repo</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={project_one} />
                        <Card.Body>
                            <Card.Title>Project 3</Card.Title>
                            <Card.Text>
                                This is Project 3. Best project yet!
                            </Card.Text>
                            <Card.Link href="#">GitHub Repo</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
}