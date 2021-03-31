import './Education.css'
import Item from './Item/Item'

function Education() {

    const nus_modules = ["CS1010 - Programming Methodology",
        "CS1231 - Discrete Structures", 
        "CS2040C - Data Structures and Algorithms", 
        "CS2113T - Software Engineering and Object-Oriented Programming",
        "CS3230 - Design and Analysis of Algorithms",
        "CS4231 - Parallel and Distributed Algorithms",
        "CS2102 - Database Systems",
        "CS3223 - Database Systems Implementations", 
        "CS2107 - Introduction to Information Security",
        "CS3243 - Introduction to Artificial Intelligence",
        "CS4225 - Big Data Systems for Data Science"];

    const jc_modules = ["H2 Mathematics",
        "H2 Chemistry",
        "H2 Physics",
        "H1 Economics"]

    return (
        <div>
            <Item school="National University of Singapore" major="Bachelor of Engineering (Computer Engineering)" modules={nus_modules} />
            <Item school="Serangoon Junior College" major="Science Stream (3H2s 1H1)" modules={jc_modules} />
        </div>
    );
}

export default Education;
