import React from "react";
import { Element } from "react-scroll";
import Project from "../Components/Project/Project";
import "./ProjectContainer.css";

const ProjectContainer = () => {

    const projects = [
        {
            img:"https://c4.wallpaperflare.com/wallpaper/448/174/357/neon-4k-hd-best-for-desktop-wallpaper-preview.jpg",
            title:"Keep Note",
            desc:"In keep-note app you can note down the content and also you can delete it.",
            link:"https://monumental-griffin-858257.netlify.app/",
        },
        {
            img:"https://c1.wallpaperflare.com/preview/425/59/772/highway-interchange-slip-road-tax-check.jpg",
            title:"Toll Management System",
            desc:"The primary aim of a Toll Management System is to recover the amount that was invested in constructing, repairing and maintaining the operation by collecting revenues.",
            link:"https://strong-yeot-b568e2.netlify.app",
        },
        {
            img:"https://c4.wallpaperflare.com/wallpaper/952/536/1006/winter-4k-pc-desktop-wallpaper-preview.jpg",
            title:"Chatify",
            desc:"Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
            link:"https://chatify-49.web.app/",
        },
        {
            img:"https://wallpapercave.com/wp/wp7339157.jpg",
            title:"Dealogic",
            desc:" Seller Can post Products to Sell, Delete Product and Promote Added product,Buyer Can Purchase any Product, cancel Order and make payment with Stripe,Admin Can manage, Users, Products, Product Status, Add product, publish blog.",
            link:"https://dealogic-msh.web.app/",
        },
    ]
  return (
    <Element className="ProjectContainer" id="projects">
        <h1>Projects</h1>
        <p>
            Here are some Projects I have done.
        </p>
        <div className="projectContainer__projects">
{
    projects.map((project,index)=>{
        return (
           <Project
            key={index}
            img={project.img} 
            title={project.title} 
            desc={project.desc} 
            link={project.link} 
            />
        )
    })
}
        </div>
    </Element>
  )
}

export default ProjectContainer