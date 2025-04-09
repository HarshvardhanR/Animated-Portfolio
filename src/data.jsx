import moon from './assets/moon.png'
import uranus from './assets/uranus.png'
import mars from './assets/mars.png'
import earth from './assets/earth.png'

export default{
    text: "Hii, I am Harshvardhansingh Rao",
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
}