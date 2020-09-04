import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import BreadCrumbs from "./components/BreadCrumbs";
import Navigator from "./components/Navigator";
// Pages
import ContactUs from "./pages/ContactUs";
import WithPage from "./pages/Info";
import Home from "./pages/Home";
import DashBoard from "./pages/Dashboard";
import Video from "./pages/Video";
import "./index.css";

// console.log("=>", process.env.NODE_ENV);

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="container" id="b-content">
                <BreadCrumbs />
                <Navigator />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/video" component={Video} />
                    <Route
                        path="/content-from-server/:page"
                        component={Content}
                    />
                    <Route path="/contacts" component={ContactUs} />
                    <Route path="/withpage/:page" component={WithPage} />
                    <Route path="/dashboard" component={DashBoard} />
                    <Route path="*">
                        <div
                            className="alert alert-danger text-center"
                            role="alert">
                            404 Not found
                        </div>
                    </Route>
                </Switch>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

function render() {
    const container = document.getElementById("container");

    ReactDOM.render(<App />, container);
}

render();

if (module.hot) {
    module.hot.accept(
        () => {
            // console.warn("accept");
            // render();
        },
        e => {
            console.error(e);
        },
    );

    module.hot.dispose(
        () => {
            // console.warn("dispose");
        },
        () => {},
    );
    // console.warn("hot", module.hot.status());
}
