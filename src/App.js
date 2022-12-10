import React from "react";
import Header from "./Components/Header/Header";
import SkillContainer from "./SkillContainer/SkillContainer";
import TopContainer from "./Components/TopContainer/TopContainer";
import "./App.css";
import ExperienceContainer from "./ExperienceContainer/ExperienceContainer";
import Contact from "./Components/Contact/Contact";
import ProjectContainer from "./ProjectContainer/ProjectContainer";

const App = () => {
  return (
    <div>
      <Header />
      <TopContainer />
      <SkillContainer />
      <ProjectContainer />
      <ExperienceContainer />
      <Contact />
    </div>
  )
}

export default App;