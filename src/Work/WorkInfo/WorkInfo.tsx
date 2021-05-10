import './WorkInfo.scss'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

interface Props {
    company: string,
    title: string,
    job_desc: any,
    first?: boolean
}

function WorkInfo(props: Props) {

    function DetailedInfo() {
        let myKeys: string[] = []
        props.job_desc.forEach((value: string[], key: string) => myKeys.push(key));
        let last_item_index = myKeys.length
        let i = 0;
        return <div>
            {
                myKeys.map((item: string) => {
                    i++
                    const module_list = props.job_desc.get(item)
                    return <div>
                        <div className="title-item"> {item} </div>
                        {module_list.map(function (s: string) {
                            return <li>{s}</li>;
                        })}
                        {
                            i !== last_item_index ? <br /> : <div />
                        }
                    </div>
                })
            }
        </div>
    }

    return (
        <div className="item-row">
            <div className="item-card">
                <div className="school">
                    {props.company}
                </div>
                <div className="major">
                    {props.title}
                </div>
                {
                    props.first === true ?
                        <Accordion defaultActiveKey="0">
                            <Card className="accordion-header">
                                <Accordion.Toggle as={Card.Header} eventKey="0" className="card-bottom" >
                                    Job Responsibilities and Work Completed
                        </ Accordion.Toggle>
                                <Accordion.Collapse className="modules-body" eventKey="0">
                                    <Card.Body >
                                        <DetailedInfo />
                                    </Card.Body>
                                </ Accordion.Collapse>
                            </Card>
                        </Accordion>
                        : <Accordion>
                            <Card className="accordion-header">
                                <Accordion.Toggle as={Card.Header} eventKey="0" className="card-bottom" >
                                    Job Responsibilities and Work Completed
                    </ Accordion.Toggle>
                                <Accordion.Collapse className="modules-body" eventKey="0">
                                    <Card.Body >
                                        <DetailedInfo />
                                    </Card.Body>
                                </ Accordion.Collapse>
                            </Card>
                        </Accordion>
                }
            </div>
        </div>
    );
}

export default WorkInfo;

WorkInfo.defaultProps = { first: false }
