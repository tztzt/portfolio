import './Item.scss'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

interface Props {
    company: string,
    title: string,
}

function Item(props: Props) {

    return (
        <div className="item-row">
            <div className="item-card">
                <div className="school">
                    {props.company}
                </div>
                <div className="major">
                    {props.title}
                </div>
                <Accordion >
                    <Card className="accordion-header">
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="card-bottom" >
                            Information
                        </ Accordion.Toggle>
                        <Accordion.Collapse className="modules-body"eventKey="0">
                            <Card.Body >
                                Some Text
                            </Card.Body>
                        </ Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </div>
    );
}

export default Item;
