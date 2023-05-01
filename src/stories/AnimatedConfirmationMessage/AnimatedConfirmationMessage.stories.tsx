import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import{ AnimatedConfirmationMessage,  AnimatedConfirmationMessageProps } from './AnimatedConfirmationMessage';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export


const meta: Meta<typeof AnimatedConfirmationMessage> = {
  title: "Animated Confirmation Message",
  component: AnimatedConfirmationMessage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
  tags: ["autodocs"],
  parameters: {
    federated: {
      componentName: "AnimatedConfirmationMessage",
      cobaltUrl:`https://github.com/thumbtack/go/blob/507fee2dc0e84cd418e3be5ca221354dad025b2b/cobalt/schema/common.graphql#L1269-L1273`,
      figmaUrl: `https://www.figma.com/file/Y5M1lIeHoXuxkASlSnjjoW/MW23-Federated-Libraries?type=design&node-id=2-1386&t=aKs34I0whfRndz0H-0`,
      type: `
      type AnimatedConfirmationMessage {
        title: FormattedText
        subtitle: FormattedText
        showAnimation?: boolean	
      }
    `
    },
  },

};

const defaultProps: AnimatedConfirmationMessageProps= {
  title: 'This is your title!',
  subtitle: 'Here you can say more. ',
  showAnimation: true,
  titleSize: 1,
  subtitleSize: 1,
  isCenterTitleBody: true,
};


export default meta;
type Story = StoryObj<typeof AnimatedConfirmationMessage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  args: {
    ...defaultProps
  },
};

// export const LoadingState: Story = {
//   args: {
//     ...defaultProps,
//     actionButtonLoading: true
//   },
// };

// export const NoSecondaryButton: Story = {
//   args: {
//     ...defaultProps,
//     showSecondaryButton:false
//   },
// };

// export const CustomSaveText: Story = {
//   args: {
//     ...defaultProps,
//     actionButtonText: "Let's Go!"
//   },
// };

// export const ContextText: Story = {
//   args: {
//     ...defaultProps,
//     contextText: "Let's Go!",
//     contextTextAlignment:"left",
//     showSecondaryButton:false
//   },
// };
