import React, { useContext } from "react";

import DragItem from "@/components/DragItem";
import GridContext from "@/contexts/GridContext";
import { Grid, GridImage, GridItem } from "@/components/Grid";

function App() {
  const { items, moveItem } = useContext(GridContext);

  return (
    <div className="App">
      <Grid>
        {items.map((item) => (
          <DragItem key={item.id} id={item.id} onMoveItem={moveItem}>
            <GridItem>
              <GridImage src={item.src}></GridImage>
            </GridItem>
          </DragItem>
        ))}
      </Grid>
    </div>
  );
}

export default App;
