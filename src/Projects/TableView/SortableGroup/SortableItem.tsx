import './SortableItem.scss'
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Form from 'react-bootstrap/Form'
import { BsFillGridFill } from "react-icons/bs";

interface Props {
  column: any,
}

export function SortableItem(props: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: props.column.id });

  const style: any = {
    transform: CSS.Transform.toString(transform),
    transition,

  };

  const type: any = 'checkbox'

  return (
    <div className="sortable-item" ref={setNodeRef} style={style} >
      <Form>
        <Form.Check inline type={type} label={props.column.Header} id={`${props.column.id}-${type}`} {...props.column.getToggleHiddenProps()}/>
        <BsFillGridFill className="icon-style" {...listeners} {...attributes} />
      </Form>
    </div>
  );
}