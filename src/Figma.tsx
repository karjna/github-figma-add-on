import React from "react";
import { useParameter } from "@storybook/manager-api";
import { PARAM_KEY } from "./constants";
import { FigmaContent } from "./components/FigmaContent";

interface TabProps {
  active: boolean;
}

interface ParamsType {
  cobaltUrl?: string;
  figmaUrl?: string;
  componentName?: string
}


export const Figma: React.FC<TabProps> = ({ active }) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useparameter
  const paramData = useParameter<ParamsType>(PARAM_KEY, {});
  return active ? <FigmaContent figmaUrl={paramData.figmaUrl} name={paramData.componentName}/> : null;
};
