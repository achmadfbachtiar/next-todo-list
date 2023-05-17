'use client';
import { Provider } from "react-redux";
import { store } from "@/store";
import { todoSlice } from "@/api/todoSlice";
import App from "./App";

export default function Home() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
