import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>These are some of my projects</h1>
      <div className="cards__container">
        <CardItem
          src="images/covid-letter.jpg"
          title="The Covid Letter"
          text="A web app displaying statistical data of Covid-19 with the help of express as backend. Data is fetched from rapidAPI and John Hopkins University APIs, served using body-parser and graphs are plotted using chart-js. It has a newsletter function built with Mailchimp API and is also my first backend project."
          web="https://limitless-woodland-73918.herokuapp.com/"
          github="https://github.com/RitSar/The-Covid-Letter"
        />
        <CardItem
          src="images/secrets.jpg"
          title="Secrets"
          web="https://secrets-express.glitch.me/"
          github="https://github.com/RitSar/secrets-express"
          text="Secrets is a web application focused on user authentication where users can anonymously post a secret. Passwords were stored after AES-256-CBC encryption, later upgaraded to multiple rounds of salting and hashing. OAuth through Google and Facebook are other methods of registration and sessions are stored in cookies."
        />
        <CardItem
          src="images/check-list.jpg"
          title="Checklist *"
          text="A to-do list application with a database on Mongo DB Atlas based on AWS cloud. Basic CRUD operations are used to interact with the database with the help of mongoose and is accessed through EJS view engine and body-parser. Lodash modular utlities are used for casing URLs and custom SVGs are used for icons."
          web="https://ritsar-checklist.herokuapp.com/"
          github="https://github.com/RitSar/Check-list"
        />
        <CardItem
          src="images/keeper.jpg"
          title="Keeper *"
          web="https://ritsar-keeper.netlify.app/"
          github="https://github.com/RitSar/Keeper"
          text="Keeper is an attempt at a Google Keep clone made with react and jsx. This is a demo version without a database and authentication system."
        />
        <CardItem
          src="images/daily-journal-blog.jpg"
          title="Daily Journal Blog *"
          web="https://daily-journal.glitch.me/"
          github="https://github.com/RitSar/blog-mongo"
          text="A blog application based on express and mongoDB, composed posts are published to home page after being saved on the cloud database."
        />
        <CardItem
          src="images/portfolio.jpg"
          title="This portfolio"
          web="none"
          github="https://github.com/RitSar/portfolio"
          text="My portfolio is a front-end project developed with react and hosted on github pages. The contact form is connected via webhooks and messages are stored in a spreadsheet."
        />

        <CardItem
          src="images/NFK.jpg"
          title="Need for Kart"
          web="https://connect.unity.com/mg/karting/nfk-the-rainbow-man"
          github="none"
          text="NFK is a Unity3d WebGL game I made in a Unity game jam. It is a kart racing game with checkpoint and lap race modes and is made with free assests."
        />
        <CardItem
          src="images/rest.png"
          title="ritsar-api"
          web="none"
          github="https://github.com/RitSar/REST_API"
          text="This is a RESTful API which supports get, post, put, patch and delete requests, through which a user can access, modify, publish or delete one or multiple articles."
        />
      </div>
      <p className="marg">
        * these projects are a demo version without user authentication for
        easier view access
      </p>
    </div>
  );
}

export default Cards;
