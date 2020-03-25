import { FacebookFilled } from "@ant-design/icons";
import { Layout } from "antd";
import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Logo from "./components/Logo";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import RequestHelp from "./pages/RequestHelp";
import SignUp from "./pages/SignUp";

import "./LinguistAid.scss";
import NavBarMenu from "./components/NavBarMenu";
import About from "./pages/About";

const { Header, Footer, Content } = Layout;

const LinguistAid: FunctionComponent<{}> = () => (
  <Router>
    <div>
      <ScrollToTop />
      <Layout>
        <Header id="header">
          <Link to="/">
            <Logo />
          </Link>
          <NavBarMenu />
        </Header>
        <Content id="content-container">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/sign-up" exact>
              <SignUp />
            </Route>
            <Route path="/request-help" exact>
              <RequestHelp />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
          </Switch>
        </Content>
        <Footer id="footer">
          Made and run with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by volunteers. <Link to="/about">Get in touch with us here.</Link>{" "}
          Also, a massive thank you to{" "}
          <a href="https://www.netlify.com">Netlify</a> for generously hosting
          and powering this site for free!
          <div className="icons">
            <a href="https://fb.me/linguist.aid">
              <FacebookFilled />
            </a>
          </div>
        </Footer>
      </Layout>
    </div>
  </Router>
);

export default LinguistAid;
