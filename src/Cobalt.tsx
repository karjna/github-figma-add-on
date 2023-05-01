import React from "react";
import { useParameter } from "@storybook/manager-api";
import { PARAM_KEY } from "./constants";
import { CobaltContent } from "./components/CobaltContent";

interface TabProps {
  active: boolean;
}

interface ParamsType {
  cobaltUrl?: string;
  figmaUrl?: string;
  componentName?: string;
  type?: string;
}

export const Tab: React.FC<TabProps> = ({ active }) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useparameter
  const paramData = useParameter<ParamsType>(PARAM_KEY, {});
  return active ? <CobaltContent cobaltUrl={paramData.cobaltUrl} name={paramData.componentName} type={paramData.type}/> : null;
};
