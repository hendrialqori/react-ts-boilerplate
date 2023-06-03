import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";

const queryClient = new QueryClient();

const _ROOT = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

_ROOT.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </React.StrictMode>
    </QueryClientProvider>
  </RecoilRoot>
);
