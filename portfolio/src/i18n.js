import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navBar_Home: "Home",
      navBar_skills: "Skills",
      navBar_projects: "Projects",
      navBar_musicProduction: "Musics",
      navBar_contact: "Contact",
      welcome: "Welcome to my portfolio",
      hover: "Hover me!",
      hi: "Hi, i'm a ",
      WebDeveloper: "Web Developer",
      CRMdeveloper: "CRM Developer",
      CarEnthusiast: "Car Enthusiast",
      MusicProducer: "Music Producer",
      Gamer: "Gamer",
      bannerDescription:
        "I love to create and develop new things. Here you can see some of my projects and skills.",
      feelFreeContact: "Feel free to contact me if you want to work with me.",
      skills_Title: "Skills",
      skills_DataBase: "Database",
      skills_Tools: "Tools",
      skills_Others: "Others",
      projects_Title: "Projects",
      projects_Perlin_Title: "Perlin Noise project",
      projects_Perlin_Description:
        "During my Master 1 in computer science, I had to create a project using Perlin noise. This project was in team of 3 peolple. We created a 2D map generator using Perlin noise. We used Javascript to create the project. We also used a little bit of HTML and CSS to create the website. Therz was a second Perlin noise created in Go to compare the two Perlin noise.",
      projects_CarLights_Title: "Car lights website",
      projects_CarLights_Description:
        "In order to learn React, I created a website about car dashboard lights. I also used a little bit of HTML and TailwindCSS to create the website. The website is composed of a home page with a navBar and a page for each dashboard light. I used a JSON file to store the data of the dashboard lights.",
      projects_TipsHaler_Title: "Academic project: Tips Haler",
      projects_TipsHaler_Description:
        "During my BTS SNIR, I created a system to help people with asthma. The system is composed of a Raspberry Pi, a pressure sensor, and some PVC parts. The Raspberry Pi is connected to a website where the user can see the data collected by the sensors. The user can also set up alerts if the data collected is too high. I worked with a team of 4 people to create the system, and I was in charge of creating the website and the connection between the website and the Raspberry Pi.",
      projects_Tree6clope_Title: "Tree6clope",
      projects_Tree6clope_Description:
        "Tree6clope is a project aimed at reducing cigarette waste by providing dedicated disposal bins. The project involves creating awareness about the environmental impact of cigarette butts and encouraging proper disposal. The bins are designed to be easily accessible and promote recycling.",
      musics_Title: "Music productions",
      musics_Title1: "Acapella remixes",
      musics_Title2: "Chill sounds",
      musics_Title3: "Other music",
      contact_FirstName: "First name",
      contact_LastName: "Last name",
      contact_Email: "Email",
      contact_Phone: "Phone",
      contact_Message: "Message",
      contact_Message_Placeholder: "hi there!",
      contact_Submit: "Submit",
    },
  },
  fr: {
    translation: {
      navBar_Home: "Accueil",
      navBar_skills: "Compétences",
      navBar_projects: "Projets",
      navBar_musicProduction: "Musiques",
      navBar_contact: "Contact",
      welcome: "Bienvenue sur mon portfolio",
      hover: "Survolez-moi !",
      hi: "Salut, je suis un ",
      WebDeveloper: "Développeur Web",
      CRMdeveloper: "Développeur CRM",
      CarEnthusiast: "Passionné d'automobile",
      MusicProducer: "Producteur de musique",
      Gamer: "Gamer",
      bannerDescription:
        "J'aime créer et développer de nouvelles choses. Ici, vous pouvez voir certains de mes projets et mes compétences.",
      feelFreeContact:
        "N'hésitez pas à me contacter si vous souhaitez travailler avec moi.",
      skills_Title: "Compétences",
      skills_DataBase: "Base de données",
      skills_Tools: "Outils",
      skills_Others: "Autres",
      projects_Title: "Projets",
      projects_Perlin_Title: "Projet Bruit de Perlin",
      projects_Perlin_Description:
        "Durant mon Master 1 en informatique, j'ai créé un projet utilisant le bruit de Perlin. Ce projet était en équipe de 3 personnes. Nous avons réalisé un générateur de carte 2D. Nous avons utilisé Javascript pour créer le projet ainsi qu'un peu de HTML et de CSS pour créer le site Web. Il y a eu un deuxième bruit de Perlin créé en Go pour pouvoir effectuer une comparaison en terme de performance.",
      projects_CarLights_Title: "Site web sur les voyants (voiture)",
      projects_CarLights_Description:
        "Dans le but d'apprendre React, j'ai créé un site web sur les voyants de tableau de bord de voiture. J'ai également utilisé un peu d'HTML et de TailwindCSS pour créer le site. Le site est composé d'une page d'accueil avec une barre de navigation et une page pour chaque voyant. J'ai utilisé un fichier JSON pour stocker les données des voyants.",
      projects_TipsHaler_Title: "Projet académique : Tips Haler",
      projects_TipsHaler_Description:
        "Pendant mon BTS SNIR, j'ai créé un système pour aider les personnes asthmatiques. Le système est composé d'un Raspberry Pi, d'un capteur de pression et de quelques pièces en PVC. Le Raspberry Pi est connecté à un site web où l'utilisateur peut voir les données collectées par les capteurs. L'utilisateur peut également configurer des alertes si les données collectées sont trop élevées. J'ai travaillé avec une équipe de 4 personnes pour créer le système, et j'étais en charge de créer le site web et la connexion entre le site web et le Raspberry Pi.",
      projects_Tree6clope_Title: "Tree6clope",
      projects_Tree6clope_Description:
        "Tree6clope est un projet visant à réduire les déchets de cigarettes en fournissant des bacs de collecte dédiés. Le projet consiste à sensibiliser sur l'impact environnemental des mégots de cigarettes et à encourager leur élimination appropriée. Les bacs sont conçus pour être facilement accessibles et promouvoir le recyclage.",
      musics_Title: "Productions musicales",
      musics_Title1: "Remix acapella",
      musics_Title2: "Ambiance chill",
      musics_Title3: "Autres musiques",
      contact_FirstName: "Prénom",
      contact_LastName: "Nom",
      contact_Email: "Email",
      contact_Phone: "Téléphone",
      contact_Message: "Message",
      contact_Message_Placeholder: "Bonjour !",
      contact_Submit: "Envoyer",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Langue par défaut
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
