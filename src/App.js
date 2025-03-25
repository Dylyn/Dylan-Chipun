import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import { GlowCapture, Glow } from "@codaworks/react-glow";
import "./App.css";

function App() {
  return (
    <GlowCapture size={1200}>
      <Glow color="hsl(338.69 100% 48.04%)">
        <div className="app-container glowable-background">
          <Header />
          <main className="main-content">
            <About />
            <Projects />
            <Resume />
          </main>
        </div>
      </Glow>
    </GlowCapture>
  );
}

export default App;
