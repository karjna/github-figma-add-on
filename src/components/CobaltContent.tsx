import React from "react";
import { styled } from "@storybook/theming";
import { H1, SyntaxHighlighter, Button, Icons, H3, H6, H2 } from "@storybook/components";

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
  cobaltUrl: string;
  name: string;
  type?: string;
}

export const CobaltContent: React.FC<TabContentProps> = ({ cobaltUrl, name, type }) => (
  <TabWrapper>
    <TabInner>
      <H1>Cobalt Implementation</H1>
      <H3>Keep the schema consistent for the {name} component</H3>
       <p>When implmenting a federated component, its important to keep the schema and naming conventions consistent.
         Click the Github link below to view the where the type lives
      </p>

      <Button outline small isLink title="link" href={cobaltUrl}>
      <Icons icon="link" /> Github Permalink
      </Button>
     <br></br><br></br>

      <H2>Type Reference</H2>
      <p>This is the general form that the type will have. You can use this to extend types or by itself.</p>
      <SyntaxHighlighter language="graphql" copyable={false}>
        {type}
      </SyntaxHighlighter>
    </TabInner>
  </TabWrapper>
);
