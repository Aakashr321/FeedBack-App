/* import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";
import ErrorBoundaries from "./pages/ErrorBoundaries";

function App() {
  console.log("HElloOoOO")
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <div className="container">
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIconLink />
                </div>
              </React.Fragment>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          For using params post is made
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/*" element={<Post />} />
          <Route path="/404" element={<ErrorBoundaries />} />
          <Route path="*" element={<Navigate replace to={"/404"} />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
 */
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
