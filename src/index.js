import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./mui/theme";
import "./styles/index.css";
import "./styles/fonts.css";
import App from "./App";

const client = new ApolloClient({
  uri: process.env.REACT_APP_HYGRAPH_URI,
  cache: new InMemoryCache(),
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </CacheProvider>
  </ApolloProvider>
);
