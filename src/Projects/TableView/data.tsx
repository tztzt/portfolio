
const student_steve = new Map([
    ["Principles of Economics", "B+"],
    ["Microeconomic Analysis I", "A"],
    ["Macroeconomic Analysis I", "A-"],
    ["Financial Accounting for Economists", "A"],
    ["Econometrics I", "B"],
    ["Programming Methodology", "B"]
])

const student_peter = new Map([
    ["Principles of Economics", "A+"],
    ["Microeconomic Analysis I", "A"],
    ["Programming Methodology", "A-"],
    ["Data Structures and Algorithms", "A"],
    ["Software Engineering and Object-oriented Programming", "A+"],
    ["Data Structures and Algorithms II", "A+"],
])

const student_carol = new Map([
    ["Programming Methodology", "B-"],
    ["Linear Algebra for Engineering", "A"],
    ["Engineering Calculus", "A-"],
    ["French Language 1", "B+"],
    ["Signals and Systems", "A+"],
    ["Digital Design", "B"],
])

const student_daniel = new Map([
    ["Linear Algebra for Engineering", "A"],
    ["Chemical Engineering Principles", "B+"],
    ["Engineering Calculus", "A-"],
    ["Digital Design", "B"],
    ["German Language 1", "A+"],
    ["Korean Language 1", "A"]
])

const students = new Map(
    [
        [
            student_steve, "Steve Rogers"
        ],
        [
            student_peter, "Peter Parker"
        ],
        [
            student_carol, "Carol Denvers"
        ],
        [
            student_daniel, "Bruce Banner"
        ],
    ]
)

export { students }