
import React, { useState } from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
    restrictToParentElement,
    restrictToVerticalAxis
} from '@dnd-kit/modifiers';

import { SortableItem } from './SortableItem';

interface Props {
    headers: any[];
}

export default function SortableGroup(props: Props) {

    const [columns, setColumns] = useState(props.headers);
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    return (
        <div>
            <div style={{
                padding: '0px 8px',
                fontWeight: 'bold',
                fontSize: '20px',
            }}>
                Header List
            </div>
            <div style={{
                height: '200px',
                overflowY: 'auto',
            }}>
                <DndContext
                    modifiers={[restrictToVerticalAxis, restrictToParentElement]}
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext
                        items={columns}
                        strategy={verticalListSortingStrategy}
                        
                    >
                        {columns.map(column => <SortableItem key={column.id} column={column} />)}
                    </SortableContext>
                </DndContext>
            </div>
        </div >
    );

    function handleDragEnd(event: any) {
        const { active, over } = event;
        console.log(columns)

        if (active.id !== over.id) {
            setColumns((columns) => {
                let oldItem = columns.filter(col => {
                    return col.id === active.id
                })

                const oldIndex = columns.indexOf(oldItem[0]);
                let newItem = columns.filter(col => {
                    return col.id === over.id
                })
                const newIndex = columns.indexOf(newItem[0]);
                return arrayMove(columns, oldIndex, newIndex);
            });
        }
    }
}