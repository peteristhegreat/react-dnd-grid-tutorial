import React, { memo, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

interface DragItemProps {
  id: string;
  onMoveItem: (sourceId: string, destinationId: string) => void;
  children: React.ReactNode;
}

const DragItem: React.FC<DragItemProps> = memo(
  ({ id, onMoveItem, children }) => {
    const ref = useRef<HTMLDivElement>(null);

    const [{ isDragging }, connectDrag] = useDrag(() => ({
      type: "IMG",
      item: { id },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }));

    const [, connectDrop] = useDrop(() => ({
      accept: "IMG",
      hover: (hoveredOverItem: { id: string }) => {
        if (hoveredOverItem.id !== id) {
          onMoveItem(hoveredOverItem.id, id);
        }
      },
    }));

    connectDrag(ref);
    connectDrop(ref);

    const opacity = isDragging ? 0.5 : 1;
    const containerStyle = { opacity };

    return React.Children.map(children, (child) =>
      React.cloneElement(child as React.ReactElement, {
        ref,
        style: containerStyle,
      })
    );
  }
);

DragItem.displayName = "DragItem";

export default DragItem;
