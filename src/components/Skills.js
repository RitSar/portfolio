import React from "react";
import "./Skills.css";
import SkillItem from "./SkillItem";

export default function skills() {
  return (
    <div className="skillWrapper">
      <div className="skillContainer">
        <h1>My suitcase of skills contains</h1>

        <div className="heading">
          <h2>Web Development</h2>
        </div>
        <div className="skillItems">
          <SkillItem name="React" />
          <SkillItem name="Express" />
          <SkillItem name="Mongo DB" />
          <SkillItem name="Node JS" />
          <SkillItem name="EJS" />
          <SkillItem name="Bootstrap" />
          <SkillItem name="Chart JS" />
          <SkillItem name="REST API" />
          <SkillItem name="Javasript" />
          <SkillItem name="JQuery" />
          <SkillItem name="Sass" />
          <SkillItem name="Django" />
          <SkillItem name="Babel" />
          <SkillItem name="Webkit" />
          <SkillItem name="OAuth" />
          <SkillItem name="Material-UI" />
          <SkillItem name="Apollo" />
          <SkillItem name="GraphQL" />
          <SkillItem name="Web Authentication and Security" />
        </div>

        <div className="heading">
          <h2>General Programming</h2>
        </div>
        <div className="skillItems">
          <SkillItem name="C" />
          <SkillItem name="C++" />
          <SkillItem name="OpenCV" />
          <SkillItem name="OpenGL" />
          <SkillItem name="Data Structures" />
          <SkillItem name="Algorithms" />
          <SkillItem name="Object Oriented Programming" />
          <SkillItem name="C#" />
        </div>

        <div className="heading">
          <h2>Other Tools and Frameworks</h2>
        </div>
        <div className="skillItems">
          <SkillItem name="Blender" />
          <SkillItem name="Unity 3D" />
          <SkillItem name="GIMP" />
          <SkillItem name="Inkscape" />
          <SkillItem name="Git/Github" />
          <SkillItem name="Bash" />
          <SkillItem name="Figma" />
          <SkillItem name="Adobe XD" />
          <SkillItem name="Adobe Photoshop" />
        </div>
      </div>
    </div>
  );
}
// <SkillItem name="" />
