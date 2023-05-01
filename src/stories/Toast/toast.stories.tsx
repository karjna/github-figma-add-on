import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Toast, ToastProps } from './toast';


const meta: Meta<typeof Toast> = {
    title: "Toast",
    component: Toast,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
    decorators:  [
        (Story: React.ComponentType): JSX.Element => (
            <div style={{ position: 'relative', width: '100%', height: '170px', left: '50%' }}>
                <Story />
            </div>
        ),
    ],
    tags: ["autodocs"],
    parameters: {
      federated: {
        componentName: "Toast",
        cobaltUrl:`https://github.com/thumbtack/go/blob/7ea0d08b7103d7642bcd6b6f6964152d4c8b84b5/cobalt/schema/common.graphql#L736-L752`,
        figmaUrl: `https://www.figma.com/file/0pZOWUyE0btUwQbGIKZC34/Toast?node-id=2%3A19&t=PccyBAf6FbH5yQS2-0`,
        type:`
            type Toast {
                """
                Toast theme determines the color and icon of the toast, it defaults to DEFAULT theme.
                """
                theme: ToastTheme
                text: Text!
                """
                The Toast CTA only supports simple text, click tracking and/or a url
                and is styled according to the Toast theme rather than the cta-specific attributes.
                """
                cta: Cta
                viewTrackingData: TrackingData
            }
        `
      },
    },
  };
  
export default meta;


const defaultToast: ToastProps = {
    id: 1,
    text: 'This is my toast text',
    theme: 'default',
    ctaText: 'link',
    timeout: 0,
    isOpen: true,
};

type Story = StoryObj<typeof Toast>;

export const ToastPlayground: Story = {
    args: defaultToast,
    argTypes: {
        id: { table: { disable: true } },
        index: { table: { disable: true } },
        toastTopPosition: {
            table: { disable: true },
        },
        ctaAction: { action: 'CTA Clicked' },
        onClose: { action: 'Close Clicked' },
    }
};
