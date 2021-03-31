import './Item.scss'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

interface Props {
    school: string,
    major: string,
    modules: string[]
}

function Item(props: Props) {

    return (
        <div className="item-row">
            <div className="item-card">
                <div className="school">
                    {props.school}
                </div>
                <div className="major">
                    {props.major}
                </div>
                <Accordion >
                    <Card className="accordion-header">
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="card-bottom" >
                            Modules/Subjects Taken
                        </ Accordion.Toggle>
                        <Accordion.Collapse className="modules-body"eventKey="0">
                            <Card.Body >
                                {props.modules.map(function (s: string) {
                                    return <li>{s}</li>;
                                })}
                            </Card.Body>
                        </ Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </div>
    );
}

export default Item;
