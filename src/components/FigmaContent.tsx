import React from "react";
import { styled } from "@storybook/theming";
import { H1, Button, Icons, H3, H2 } from "@storybook/components";
import { Figma } from "storybook-addon-designs/blocks"

const TabWrapper = styled.div(({ theme }) => ({
  background: theme.background.content,
  padding: "4rem 20px",
  minHeight: "100vh",
  boxSizing: "border-box",
}));

const TabInner = styled.div({
  maxWidth: 768,
  marginLeft: "auto",
  marginRight: "auto",
});

interface TabContentProps {
  figmaUrl: string;
  name: string
}

export const FigmaContent: React.FC<TabContentProps> = ({ figmaUrl, name }) => (
  <TabWrapper>
    <TabInner>
      <H1>Figma Implementation</H1>
      <H3>Keep our UI consistent for {name}</H3>
       <p>When implmenting a federated component, its important to keep the design conventions consistent.
         Click the Figma link below to view the where the design lives
      </p>

      <Button outline small isLink title="link" href={figmaUrl}>
      <Icons icon="link" /> Figma Link
      </Button>
     <br></br><br></br>

      <H2>Design Reference</H2>
      <p>This is the general form that the design will have. You can use this to extend types or by itself.</p>
   
      {figmaUrl && <Figma url={figmaUrl}/>}

    </TabInner>
  </TabWrapper>
);
