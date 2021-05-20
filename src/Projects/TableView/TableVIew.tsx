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
    show: boolean,
    width?: number
}

interface Student {
    student_name: string,
    [key: string]: any
}

// const IndeterminateCheckbox = React.forwardRef(
//     ({ indeterminate, ...rest }: any, ref) => {
//         const defaultRef = React.useRef()
//         const resolvedRef: any = ref || defaultRef

//         React.useEffect(() => {
//             resolvedRef.current.indeterminate = indeterminate
//         }, [resolvedRef, indeterminate])

//         return <input type="checkbox" ref={resolvedRef} {...rest} />
//     }
// )

function Table({ columns, data }: { columns: any, data: any }) {
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
        initialState: {
            hiddenColumns: columns.map((column: Column) => {
                if (column.show === false) return column.accessor;
            }),
        },
    })

    return (
        <div>
            <div className="table-setting-btn">
                <DropdownButton
                    className="ddown"
                    size="sm"
                    menuAlign="right"
                    variant="secondary"
                    title={<FiSettings />}
                    id="dropdown-menu-align-right">
                    <SortableGroup headers={allColumns} />
                </DropdownButton>
            </div>
            <div style={{
                width: '100%',
                overflowX: 'scroll',
                height: '400px',
                overflowY: 'scroll'
            }}>
                <table {...getTableProps()}>
                    <thead>
                        {
                            headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps({
                                    style: { color: 'black' }
                                })}>
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()}
                                            style={{
                                                borderBottom: 'solid 3px white',
                                                padding: '0.5rem',
                                                borderRight: '1px solid white',
                                                background: '#5c5c5c',
                                                color: '#e3e3e3',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {column.width !== null ? <div style={{
                                                width: column.width
                                            }}>
                                                {column.render('Header')}
                                            </div> : <div>
                                                {column.render('Header')}
                                            </div>
                                            }
                                        </th>
                                    ))}
                                </tr>
                            ))
                        }
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row, i) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return <td
                                            {...cell.getCellProps()}
                                            style={{
                                                padding: '0.5rem',
                                                borderBottom: '1px solid white',
                                                borderRight: '1px solid white'
                                            }}
                                        >{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export function TableView() {

    // 'master' list of column headers - array of objects of type { Header, accessor }
    let table_columns: Column[] = []

    let data: any[] = []

    const col_set = new Set()

    table_columns.push({ Header: 'Student Name', accessor: 'student_name', show: true, width: 100 })
    col_set.add('student_name')

    STUDENTS.forEach((key, value) => {
        let temp_std: Student
        temp_std = { student_name: key }
        let idx = 0;
        value.forEach((v, k) => {
            temp_std[k] = v
            if (!col_set.has(k)) {
                if (idx < 2) {
                    if (k.length > 20) {
                        table_columns.push({ Header: k, accessor: k, show: true, width: 150 })
                    } else {
                        table_columns.push({ Header: k, accessor: k, show: true })
                    }
                } else {
                    if (k.length > 20) {
                        table_columns.push({ Header: k, accessor: k, show: false, width: 150 })
                    } else {
                        table_columns.push({ Header: k, accessor: k, show: false })
                    }
                }
                idx++
                col_set.add(k)
            }
        })
        data.push(temp_std)
    })

    return (
        <div className="table-style">
            <div className="title-row">
                <div className="text-container">
                    Customisable Table Headers
                    <div className="sub-text-container">
                        (Mock of feature done while at Autodesk)
                    </div>
                </div>
            </div>
            <Table columns={table_columns} data={data} />
        </div>
    );
}
