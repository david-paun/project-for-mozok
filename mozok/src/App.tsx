import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react';
import logo from './logo.svg';
import './App.css';
import RandomQuote from "./components/RandomQuote";
import Quotes from "./components/Quotes";
import Home from "./components/Home";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Route path="/" element={<Home />}> </Route>
                <Route path="/quotes" element={<Quotes />}> </Route>
                <Route path="/random-quote" element={<RandomQuote />}> </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;