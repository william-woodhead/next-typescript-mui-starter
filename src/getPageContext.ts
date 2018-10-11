// This page is based on the Material-ui Next.js page
// https://github.com/mui-org/material-ui/tree/master/examples/nextjs
import { SheetsRegistry, GenerateClassName } from "jss";
import {
  createMuiTheme,
  createGenerateClassName,
  Theme
} from "@material-ui/core/styles";

export interface PageContext {
  theme: Theme;
  sheetsManager: Map<any, any>;
  sheetsRegistry: SheetsRegistry;
  generateClassName: GenerateClassName;
}

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#66e1c2",
      main: "#15d0a0",
      dark: "#008b68"
    },
    secondary: {
      light: "094b83",
      main: "#337ab7",
      dark: "7eb1dc"
    }
  }
});

function createPageContext() {
  return {
    theme,
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName()
  };
}

export default function getPageContext() {
  if (!(process as any).browser) return createPageContext();

  if (!(global as any).__INIT_MATERIAL_UI__) {
    (global as any).__INIT_MATERIAL_UI__ = createPageContext();
  }

  return (global as any).__INIT_MATERIAL_UI__;
}
