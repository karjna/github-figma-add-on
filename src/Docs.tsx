import React from "react";
import { useParameter } from "@storybook/manager-api";
import { PARAM_KEY } from "./constants";
import { Title, Subtitle, Description, Primary, Controls, Story } from '@storybook/blocks';
import { DocsContent } from "./components/DocsContext";

interface TabProps {
  active: boolean;
}

interface ParamsType {
  cobaltUrl?: string;
  figmaUrl?: string;
  componentName?: string
}

export const Docs: React.FC<TabProps> = ({ active }) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useparameter
  const paramData = useParameter<ParamsType>(PARAM_KEY, {});
  return active ? ( <DocsContent/>): null;
};
