import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>These are some of my projects</h1>
      <div className="cards__container">
        <CardItem
          src="images/snips.jpg"
          title="Social Snips"
          text="This is a social media application developed on a Apollo-GraphQL backend and styled with semantic-ui. Real time posting and deleting is done by accessing local browser storage."
          web="https://social-snips.netlify.app/"
          github="https://github.com/RitSar/Social-Snips"
        />
        <CardItem
          src="images/lookupgithub.jpg"
          title="Look up Github"
          text="A Github user information application from the Github api built on a lambda function based on serverless architecture hosted using netlify functions. "
          web="https://lookupgithub.netlify.app/"
          github="https://github.com/RitSar/github-lambda"
        />
        <CardItem
          src="images/rest.png"
          title="ritsar-api"
          web="none"
          github="https://github.com/RitSar/REST_API"
          text="This is a RESTful API which supports get, post, put, patch and delete requests, through which a user can access, modify, publish or delete one or multiple articles."
        />
        <CardItem
          src="images/covid-letter.jpg"
          title="The Covid Letter"
          text="A web app displaying statistical data of Covid-19 with the help of express as backend. Data is fetched from rapidAPI and John Hopkins University APIs, and graphs are plotted using chart-js."
          web="https://limitless-woodland-73918.herokuapp.com/"
          github="https://github.com/RitSar/The-Covid-Letter"
        />
        <CardItem
          src="images/secrets.jpg"
          title="Secrets"
          web="https://secrets-express.glitch.me/"
          github="https://github.com/RitSar/secrets-express"
          text="Secrets is a web application focused on user authentication. Passwords are encrypted through multiple rounds of salting and hashing. OAuth through Google and Facebook are implemented through passport."
        />
        <CardItem
          src="images/portfolio.jpg"
          title="This portfolio"
          web="none"
          github="code"
          text="My portfolio is a front-end project developed with react and hosted on github pages. The contact form is connected to a personal server and messages are stored in a spreadsheet."
        />
        <CardItem
          src="images/daily-journal-blog.jpg"
          title="Daily Journal Blog *"
          web="https://daily-journal.glitch.me/"
          github="https://github.com/RitSar/blog-mongo"
          text="A blog application based on express and mongoDB, composed posts are published to home page after being saved on the cloud database."
        />

        <CardItem
          src="images/keeper.jpg"
          title="Keeper *"
          web="https://ritsar-keeper.netlify.app/"
          github="https://github.com/RitSar/Keeper"
          text="Keeper is an attempt at a Google Keep clone made with react and jsx. This is a demo version without a database and authentication system."
        />
        <CardItem
          src="images/check-list.jpg"
          title="Checklist *"
          text="A to-do list application with a database on Mongo DB Atlas based on AWS cloud. Basic CRUD operations are used to interact through mongoose and is accessed through EJS."
          web="https://ritsar-checklist.herokuapp.com/"
          github="https://github.com/RitSar/Check-list"
        />
        {/* <CardItem
          src="images/NFK.jpg"
          title="Need for Kart"
          web="https://connect.unity.com/mg/karting/nfk-the-rainbow-man"
          github="none"
          text="NFK is a Unity3d WebGL game I made in a Unity game jam. It is a kart racing game with checkpoint and lap race modes and is made with free assests."
        /> */}
      </div>
      <p className="marg">
        * these projects are a demo version without user authentication for
        easier view access
      </p>
    </div>
  );
}

export default Cards;
