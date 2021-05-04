import './Modules.scss'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

interface Props {
    school: string,
    major: string,
    nus: boolean,
    modules: any;
}

function Modules(props: Props) {

    function ModulesInfo() {
        const data = props.modules

        if (props.nus === true) {
            let myKeys: string[] = []
            data.forEach((value: string[], key: string) => myKeys.push(key));
            let last_item_index = myKeys.length
            let i = 0;
            return <div>
                {
                    myKeys.map((item: string) => {
                        i++
                        const module_list = data.get(item)
                        return <div>
                            <div className="title-item"> {item} </div>
                            {module_list.map(function (s: string) {
                                return <li>{s}</li>;
                            })}
                            {
                                i != last_item_index ? <br /> : <div />
                            }
                        </div>
                    })
                }
            </div>
        } else {
            return <div>
                {props.modules.map(function (s: any) {
                    return <li>{s}</li>;
                })}
            </div>
        }
    }

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
                        <Accordion.Collapse className="modules-body" eventKey="0">
                            <Card.Body >
                                <ModulesInfo />
                            </Card.Body>
                        </ Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </div>
    );
}

export default Modules;
