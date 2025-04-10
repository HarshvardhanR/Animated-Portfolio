import moon from './assets/moon.png'
import flask from './assets/flask.svg'
import uranus from './assets/uranus.png'
import mars from './assets/mars.png'
import earth from './assets/earth.png'
import aws from './assets/aws.svg'
import azure from './assets/azure.svg'
import css3 from './assets/css3.svg'
import docker from './assets/docker.svg'
import express from './assets/express.svg'
import git from './assets/git.svg'
import html from './assets/html.svg'
import java from './assets/java.svg'
import javascript from './assets/javascript.svg'
import maven from './assets/maven.svg'
import mongoDB from './assets/mongoDB.svg'
import nodeJS from './assets/nodeJS.svg'
import npm from './assets/npm.svg'
import numpy from './assets/numpy.svg'
import ollama from './assets/ollama.svg'
import pandas from './assets/pandas.svg'
import pip from './assets/pip.svg'
import postgresql from './assets/postgresql.svg'
import postman from './assets/postman.svg'
import python from './assets/python.svg'
import pytorch from './assets/pytorch.svg'
import react from './assets/react.svg'
import scss from './assets/scss.svg'
import tensorflow from './assets/tensorflow.svg'
import typescript from './assets/typescript.svg'


export default{
    text: "Hii, I am Harshvardhansingh Rao",
    profession: ["Full Stack Developer", "Software Developer"],
    colors: ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"],
    github: "https://github.com/HarshvardhanR",
    linkedin: "https://www.linkedin.com/in/harshvardhansingh-rao-a63929222/",
    leetcode: "https://leetcode.com/u/r_harshv/",
    projects: [
        {
          title: "EEG Decoding",
          description: "Utilized the BCI Competition III Dataset II (P300 Speller) containing EEG data from two subjects to preprocess signals and evaluate multiple deep learning models such as EEGNet, CNN, LSTM, Transformers, and MAtt using k-fold cross-validation, one-hot encoding, and hyperparameter tuning to explore effective approaches for EEG signal classification.",
          image: moon,
          github: "https://github.com/HarshvardhanR/EEG-Decoding",
          
        },
        {
          title: "World War III",
          description: "Developed a CLI-based Risk game in Java using Apache Maven for build automation, collaborating with a team of six to implement advanced software design patterns for an abstracted, maintainable codebase, integrate asynchronous log tracing through the Observer pattern for performance monitoring, set up efficient CI/CD pipelines with Git for continuous deployment across three-week sprints, manage and streamline test cases for optimal execution, and document the game's functionalities comprehensively using Javadoc to ensure clear understanding and usability.",
          image: uranus,
          github: "https://github.com/HarshvardhanR/World-War-III",
        },
        {
          title: "Banking Management System",
          description: "Designed and developed a secure banking application using Java, the Spring framework, and SQLite for lightweight data storage, featuring a user-friendly GUI, secure authentication, account and profile management, real-time balance and transaction tracking, and functionalities for money transfers, deposits, and withdrawals, with strong emphasis on data integrity, validation, encryption, and efficient database structuring.",
          image: earth,
          github: "https://github.com/HarshvardhanR/BankingManagementSystem",
        },
        {
          title: "Flight Delay Prediction",
          description: "Developed a comprehensive and scalable flight delay prediction system featuring a user-friendly web interface built with HTML, CSS, Bootstrap, and Flask, seamlessly integrating both regression and classification machine learning models to deliver real-time, accurate delay predictions; incorporated extensive feature engineering and model tuning techniques to enhance predictive performance, and designed the system with future integration of airline data sources and additional functionalities in mind.",
          image: mars,
          github: "https://github.com/HarshvardhanR/Flight-Delay-Prediction",
        },
    ],
    experience:[{
      role:"Python Developer Intern",
      company : "Media Platforms",
      date : "June 2021 - July 2021",
      location: "Toronto (Remote)",
      description: "Python Developer Intern with experience in enhancing front-end interfaces using HTML for improved cross-device performance. Streamlined backend logic and optimized MongoDB queries to improve response times and data retrieval efficiency. Contributed to user interface revamp, focusing on simplified navigation and better usability. Integrated Python and Django backend services with front-end components to ensure smooth and responsive application performance."
    }],
    programmingLanguages : {
      java,
      javascript,
      typescript,
      python,
      html,
      css3,
      scss,
    },
    frameworksAndLibraries : {
      react,
      express,
      tensorflow,
      pytorch,
      pandas,
      numpy,
      nodeJS,
      flask,
    },
    developerTools : {
      git,
      postman,
      npm,
      pip,
      maven,
      ollama,
    },
    databases : {
      mongoDB,
      postgresql,
    },
    devopsAndCloud : {
      docker,
      aws,
      azure,
    }
    
    
}