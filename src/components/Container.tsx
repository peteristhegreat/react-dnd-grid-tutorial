// File: components/Container.tsx

import React, { useState } from "react";
import GridItem from "./GridItem";
import { useDrop } from "react-dnd";
import update from "immutability-helper";

interface ContainerProps {
  // Define any props for Container if needed
}

const Container: React.FC<ContainerProps> = () => {
  // State and logic for handling items and their positions
  const [items, setItems] = useState(/* initial state */);

  const [, drop] = useDrop(() => ({
    accept: "box",
    // Logic for handling drop
  }));

  // Logic to render GridItems based on the state

  return (
    <div ref={drop} className="container">
      {items.map((item, index) => (
        <GridItem key={item.id} id={item.id} left={item.left} top={item.top}>
          {/* Content of GridItem */}
        </GridItem>
      ))}
    </div>
  );
};

export default Container;
