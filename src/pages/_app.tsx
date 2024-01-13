import { GridProvider } from "@/contexts/GridContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DndProvider } from "react-dnd";
// import HTML5Backend from "react-dnd-html5-backend";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <GridProvider>
        <Component {...pageProps} />
      </GridProvider>
    </DndProvider>
  );
}
