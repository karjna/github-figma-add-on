import { addons, types } from "@storybook/manager-api";
import { ADDON_ID, TAB_ID, FIGMA_ID, DOCS_ID } from "./constants";
import { Tab } from "./Cobalt";
import { Figma } from "./Figma";
import { Docs } from "./Docs";

/**
 * Note: if you want to use JSX in this file, rename it to `manager.tsx`
 * and update the entry prop in tsup.config.ts to use "src/manager.tsx",
 */
// Register the addon
addons.register(ADDON_ID, () => {
  // Register the tab
  addons.add(TAB_ID, {
    type: types.TAB,
    title: "Cobalt",
    //👇 Checks the current route for the story
    route: ({ storyId }) => `/cobalt/${storyId}`,
    //👇 Shows the Tab UI element in myaddon view mode
    match: ({ viewMode }) => viewMode === "cobalt",
    render: Tab,
  });

  addons.add(FIGMA_ID, {
    type: types.TAB,
    title: "Figma",
    //👇 Checks the current route for the story
    route: ({ storyId }) => `/figma/${storyId}`,
    //👇 Shows the Tab UI element in myaddon view mode
    match: ({ viewMode }) => viewMode === "figma",
    render: Figma,
  });

  addons.add(DOCS_ID, {
    type: types.TAB,
    title: "Docs",
    //👇 Checks the current route for the story
    route: ({ storyId }) => `/docs/${storyId.replace(/--\S+/,'--docs')}`,
    //👇 Shows the Tab UI element in myaddon view mode
    match: ({ viewMode }) => viewMode === "docs",
    render: Docs,
  });
}); 

