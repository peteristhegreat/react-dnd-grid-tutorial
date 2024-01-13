import React, { createContext, Component, ReactNode } from "react";
import {sample_items} from "./sampleItems";

function move<T>(array: T[], oldIndex: number, newIndex: number): T[] {
  if (newIndex >= array.length) {
    newIndex = array.length - 1;
  }
  array.splice(newIndex, 0, ...array.splice(oldIndex, 1));
  return array;
}

function moveElement<T>(array: T[], index: number, offset: number): T[] {
  const newIndex = index + offset;

  return move(array, index, newIndex);
}


interface GridItem {
  id: string;
  left?: number;
  top?: number;
  src: string;
  children?: React.ReactNode;
}

interface GridContextState {
  items: GridItem[];
  moveItem: (sourceId: string, destinationId: string) => void;
  setItems: (items: GridItem[]) => void;
}

// Define the context with a default value
const GridContext = createContext<GridContextState>({
  items: [],
  moveItem: () => {},
  setItems: () => {},
});

interface GridProviderProps {
  children: ReactNode; 
}

export class GridProvider extends Component<GridProviderProps, GridContextState> {
  constructor(props: GridProviderProps) {
    super(props);
    this.state = {
      items: sample_items,
      moveItem: this.moveItem,
      setItems: this.setItems,
    };
  }

  setItems = (items: GridItem[]) => this.setState({ items });

  moveItem = (sourceId: string, destinationId: string) => {
    const sourceIndex = this.state.items.findIndex(
      (item) => item.id === sourceId
    );
    const destinationIndex = this.state.items.findIndex(
      (item) => item.id === destinationId
    );

    if (sourceIndex === -1 || destinationIndex === -1) {
      return;
    }

    const offset = destinationIndex - sourceIndex;
    this.setState((state) => ({
      items: moveElement(state.items, sourceIndex, offset),
    }));
  };

  render() {
    return (
      <GridContext.Provider value={this.state}>
        {this.props.children}
      </GridContext.Provider>
    );
  }
}

export default GridContext;
