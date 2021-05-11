import './TableView.scss'
import React from 'react'
import { useTable } from 'react-table'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { students as STUDENTS } from './data'
import SortableGroup from './SortableGroup/SortableGroup'
import { FiSettings } from 'react-icons/fi'

export interface Column {
    Header: string,
    accessor: string,
}

interface Student {
    student_name: string,
    [key: string]: any
}

const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }: any, ref) => {
        const defaultRef = React.useRef()
        const resolvedRef: any = ref || defaultRef

        React.useEffect(() => {
            resolvedRef.current.indeterminate = indeterminate
        }, [resolvedRef, indeterminate])

        return <input type="checkbox" ref={resolvedRef} {...rest} />
    }
)

function Table({ columns, data, sortable_columns }: { columns: any, data: any, sortable_columns: any }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        allColumns,
        getToggleHideAllColumnsProps,
    } = useTable({
        columns,
        data,
    })

    return (
        <div>
            <div className="table-setting-btn">
                <DropdownButton
                    className="ddown z-depth-5"
                    size="sm"
                    menuAlign="right"
                    variant="secondary"
                    title={<FiSettings />}
                    id="dropdown-menu-align-right"
                >
                    <SortableGroup headers={allColumns} />
                </DropdownButton>
            </div>

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
        </div>
    )
}

export function TableView() {

    // 'master' list of column headers - array of objects of type { Header, accessor }
    let table_columns: Column[] = []

    // list of column headers to pass to sortable flyout to track order - array of strings
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
                    Customisable Table Headers
                    <div className="sub-text-container">
                        (Mock of feature done while at Autodesk)
                    </div>
                </div>
            </div>
            <Table columns={table_columns} data={data} sortable_columns={sortable_columns} />
        </div>
    );
}
