import './Education.css'
import Item from './Item/Modules'

function Education() {

    const nus_modules = new Map(
        [
            ["Algorithms and Data Structures",
                [
                    "CS1231 - Discrete Structures",
                    "CS2040C - Data Structures and Algorithms",
                    "CS3230 - Design and Analysis of Algorithms (Exchange Programme)",
                    "CS4231 - Parallel and Distributed Algorithms",
                ],
            ],
            ["Coding and Programming Principles",
                [
                    "CS1010 - Programming Methodology",
                    "CS2113T - Software Engineering and Object-Oriented Programming",
                    "CS3210 - Parallel Computing (Exchange)",
                ]
            ],
            ["Database Design",
                [
                    "CS2102 - Database Systems",
                    "CS3223 - Database Systems Implementations (Exchange)",
                ]
            ],
            ["Other Modules",
                [
                    "CS2107 - Introduction to Information Security",
                    "CS3243 - Introduction to Artificial Intelligence (Exchange)",
                    "CG4002 - Computer Engineering Capstone Project",
                    "CS4225 - Big Data Systems for Data Science"
                ]
            ]
        ]
    )

    const jc_modules = ["H2 Mathematics",
        "H2 Chemistry",
        "H2 Physics",
        "H1 Economics"]

    return (
        <div>
            <Item school="National University of Singapore (Aug 2017 - May 2021)" major="Bachelor of Engineering (Computer Engineering)" nus={true} modules={nus_modules} />
            <Item school="Serangoon Junior College (2013 - 2014)" major="Science Stream (3H2s)" nus={false} modules={jc_modules} />
        </div>
    );
}

export default Education;
