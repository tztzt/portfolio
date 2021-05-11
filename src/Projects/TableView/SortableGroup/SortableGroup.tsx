
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
        <DndContext
            modifiers={[restrictToParentElement]}
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
    );

    function handleDragEnd(event: any) {
        const { active, over } = event;

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