import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import{ FooterActionBar,  FooterActionBarProps } from './footer-action-bar';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const styles = {
  transform: 'scale(1)',
  height: '260px',
  display: 'block',
  border: '1px solid #d3d4d5',
  background: '#fcfcfc',
};
const fixedDecorator = (storyFn:any) => (<div style={styles}>{storyFn()}</div>);

const meta: Meta<typeof FooterActionBar> = {
  title: "Footer Action Bar",
  component: FooterActionBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
  decorators: [ fixedDecorator],
  tags: ["autodocs"],
  parameters: {
    federated: {
      componentName: "FooterActionBar",
      cobaltUrl:`https://github.com/thumbtack/go/blob/507fee2dc0e84cd418e3be5ca221354dad025b2b/cobalt/schema/common.graphql#L1282-L1286`,
      figmaUrl: `https://www.figma.com/file/Y5M1lIeHoXuxkASlSnjjoW/MW23-Federated-Libraries?type=design&node-id=17-8866&t=aKs34I0whfRndz0H-0`,
      type:`
        type FooterActionBar { 
          primaryAction: Cta
          secondaryAction: Cta
          centerText: FormattedText,
        }
      `
    },
  },
};

const defaultFooterActionBar: FooterActionBarProps = {
  actionButtonEnabled : true,
  actionButtonLoading : false,
  actionButtonText : "Save",
  isActionSubmit : true,
  onBackClick: ()=> {},
  onSecondaryButtonClick: ()=> {},
  onActionClick: ()=> {},
  showSecondaryButton : true,
  shouldRemoveStickyFooterOnMobile : false,
  secondaryButtonText: 'Not Now',
  secondaryButtonEnabled : true,
  showBackButtonOnMobile : false,
};


export default meta;
type Story = StoryObj<typeof FooterActionBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    ...defaultFooterActionBar
  },
};

export const LoadingState: Story = {
  args: {
    ...defaultFooterActionBar,
    actionButtonLoading: true
  },
};

export const NoSecondaryButton: Story = {
  args: {
    ...defaultFooterActionBar,
    showSecondaryButton:false
  },
};

export const CustomSaveText: Story = {
  args: {
    ...defaultFooterActionBar,
    actionButtonText: "Let's Go!"
  },
};

export const ContextText: Story = {
  args: {
    ...defaultFooterActionBar,
    contextText: "Let's Go!",
    contextTextAlignment:"left",
    showSecondaryButton:false
  },
};
