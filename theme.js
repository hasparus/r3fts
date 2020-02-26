import React from "react";
import { themes } from "mdx-deck";
import prism from "@theme-ui/prism/presets/theme-ui";
import Prism from "@theme-ui/prism";

export const theme = {
  ...themes.notes,
  googleFont:
    "https://fonts.googleapis.com/css?family=Work+Sans:400,700&display=block",
  fonts: {
    body: '"Work Sans", sans-serif'
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "blue",
    secondary: "#111",
    accent: "black",
    gray: "#aaaaaf"
  },
  styles: {
    code: {
      ...prism
    },
    a: {
      color: "unset",
      textDecorationColor: "rgba(0, 50, 255, 0.18)"
    },
    li: {
      margin: "1rem 0",
      textAlign: "left"
    },
    blockquote: {
      fontStyle: "italic",
      backgroundColor: "#f8f8f8",
      padding: "1rem",
      border: "1px solid black",
      boxShadow: "0.5rem 0.9rem 0 0.2rem"
    }
  },
  components: {
    pre: ({ children }) => <>{children}</>,
    code: Prism
  }
};
