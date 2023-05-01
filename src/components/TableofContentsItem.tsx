import React from "react";
import { Canvas, Story } from "@storybook/blocks";


interface TabContentProps {
    children: any;
  primaryLink: string;
  title: string;
}

export const TableofContentsItem: React.FC<TabContentProps> = ({ primaryLink, children, title }) => (
   <a
    className="link-item"
    href={primaryLink}
  >
    <h3>{title}</h3>
    <Canvas sourceState="none">
        {/* <Story of={FooterActionBar.Primary}/> */}
        {children}
    </Canvas>
    
  </a>
);
