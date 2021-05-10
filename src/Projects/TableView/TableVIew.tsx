import './TableView.scss'
import { useTable } from 'react-table'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { students as STUDENTS } from './data'
import SortableGroup from './SortableGroup/SortableGroup'

export interface Column {
    Header: string,
    accessor: string,
}

interface Student {
    student_name: string,
    [key: string]: any
}

function Table({ columns, data }: { columns: any, data: any }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export function TableView() {

    let table_columns: Column[] = []
    let sortable_columns: string[] = []
    let data: any[] = []

    const col_set = new Set()

    table_columns.push({ Header: 'Student Name', accessor: 'student_name' })
    sortable_columns.push('Student Name')
    col_set.add('student_name')

    STUDENTS.forEach((key, value) => {
        let temp_std: Student
        temp_std = { student_name: key }

        value.forEach((v, k) => {
            temp_std[k] = v
            if (!col_set.has(k)) {
                table_columns.push({ Header: k, accessor: k })
                sortable_columns.push(k)
                col_set.add(k)
            }
        })
        data.push(temp_std)
    })

    return (
        <div className="table-style">
            <div className="table-row">
                <div className="text-container">
                    Customisable Table Headers (Mock of feature done while at Autodesk)
                </div>
                <div className="table-setting-btn">
                    <DropdownButton
                        className="ddown z-depth-5"
                        size="sm"
                        menuAlign="right"
                        variant="secondary"
                        title="Customise Table"
                        id="dropdown-menu-align-right"
                    >
                        <SortableGroup headers={sortable_columns} />
                    </DropdownButton>
                </div>
            </div>
            <Table columns={table_columns} data={data} />
        </div>
    );
}
