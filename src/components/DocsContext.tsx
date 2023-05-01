import React from "react";
import { styled } from "@storybook/theming";
import { H1, SyntaxHighlighter, Button, Icons, H3, H6, H2 } from "@storybook/components";
import { Title, Subtitle, Description, Primary, Controls, Story } from '@storybook/blocks';

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

}

export const DocsContent: React.FC<TabContentProps> = ({  }) => (
  <TabWrapper>
    <TabInner>
        hi
      {/* <Story/> */}
    </TabInner>
  </TabWrapper>
);
