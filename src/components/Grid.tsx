import React from "react";

// GridProps and GridImageProps define the expected props for Grid and GridImage components
interface GridProps {
  children: React.ReactNode;
}

interface GridImageProps {
  src: string;
  children?: React.ReactNode;
}

interface GridItemProps extends React.HTMLProps<HTMLDivElement> {
  forwardedRef?: React.Ref<HTMLDivElement>;
}

// Grid, GridImage, and GridItem components using TailwindCSS for styling
export const Grid: React.FC<GridProps> = ({ children }) => (
  <div className="w-[600px] flex justify-start flex-wrap">{children}</div>
);

export const GridImage: React.FC<GridImageProps> = ({ src, children }) => (
  <div
    className="flex-grow border-white border flex justify-center items-center"
    style={{
      backgroundImage: `url("${src}")`,
      backgroundSize: "cover",
      backgroundPosition: "50%",
    }}
  >
    {children}
  </div>
);

export const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  (props, ref) => (
    <div
      ref={ref}
      {...props}
      className="flex-0 flex justify-center items-stretch box-border w-[190px] h-[190px]"
    >
      {/* Additional content */}
    </div>
  )
);

GridItem.displayName = "GridItem";
