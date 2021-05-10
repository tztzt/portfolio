import './Work.scss'
import WorkInfo from './WorkInfo/WorkInfo'

function Work() {

    const a_job = new Map(
        [
            ["Supported the Vault team in development of Vault web application port built on React Typescript and Redux",
                [
                    "Creation of a flyout to allow users to customise headers of a displayed table - able to show, hide, sort or filter the collection of headers",
                    "Incorporation of keypress interactions to allow users to interact with the abovementioned table using arrow keys - able to navigate the list of tables with up, down and enter key",
                    "Handling of minor ticket issues such as CSS styling issues or simple features",
                    "Completed 1 major feature, 2 simple features and 2 minor bug fixes over the 6 month period"
                ],
            ],
            ["Perform manual regular regression smoke tests on basic features of the Vault desktop application during updates or releases",
                [
                    "Test interactions of Vault with other Autodesk products - AutoCAD, Inventor and Revit",
                    "Identification of key blocking issues - e.g. unable to save to or open files from server",
                    "Completed 8 smoke tests over the 6 month period"
                ]
            ],
        ]
    )

    const d_job = new Map(
        [
            ["Performed API Testing on over 400 APIs used in iOS and Android mobile applications",
                [
                    "Load testing of APIs to be able to handle multiple simultaneous requests",
                    "Validation of output to ensure received data is in proper JSON format with appropriate output"
                ],
            ],
            ["Developed web-based tools on Angular for internal usage to support development teams",
                [
                    "Generation of receipt templates for business-to-business transaction usage",
                    "Automation of writing of source code files according to templates for easier product scaling",
                    "Display of server and client performance statistics - e.g. servers being run on Linux systems",
                ]
            ],
            ["Exploration of other possible improvements to the development process",
                [
                    "Automation of setup of Docker systems on Linux machinesto host various servers using mySQL, MariaDB",
                    "Testing of interaction and usage of and Hasura and GraphQL API to possibly improve application performance"
                ]
            ],
        ]
    )

    return (
        <div className="content">
            <WorkInfo company="Autodesk Asia Pte Ltd (July 2020 - Dec 2020)"
                title="Compulsory 6-month Internship - Software Development and Testing Intern (Vault)"
                job_desc={a_job}
                first={true}
            />
            <WorkInfo company="Deskera Singapore Pte Ltd (May 2019 - Aug 2019)"
                title="Summer Internship - Product Management Intern"
                job_desc={d_job}
            />
        </div>
    );
}

export default Work;
