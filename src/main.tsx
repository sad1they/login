import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import BrowsePage from "./pages/BrowsePage/BrowsePage.tsx";
import store, { persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import "./index.scss";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <App>
                <HomePage />
            </App>
        ),
    },
    {
        path: "login",
        element: (
            <App>
                <LoginPage />
            </App>
        ),
    },
    {
        path: "browse",
        element: (
            <App>
                <BrowsePage />
            </App>
        ),
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={router} />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
