
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Anass KAZIZ",
  title: "<Hello World!/>, I'm Anass",
  subTitle: [
  emoji(" 🚀 Embedded Systems Engineer from Morocco 🇲🇦"),
  emoji(" 📐 Math Lover"),
  emoji(" 👨‍🏫 Interested in education and the way to improve it")
  ],
  resumeLink: "https://drive.google.com/file/"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/akaziz",
  linkedin: "https://www.linkedin.com/in/anass-kaziz-979510107/",
  gmail: "kaziz.anas@gmail.com",
  instagram: "https://www.instagram.com/anas.kaziz"
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A GUY WITH A CRAZY APPETITE OF LEARNING AND DEVELOP STUFF",
  skills: [
    emoji("⚡ Develop Embedded applications for different MCUs and drivers for peripherals"),
    emoji("⚡ Develop simple Embedded Linux applications"),
    emoji("⚡ Develop Automated solutions HW & SW")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Embedded C",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
        {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "electronics",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "Networking",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Embedded Software",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Automation",
      progressPercentage: "70%"
    },
    {
      Stack: "PCB Design",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Embedded Software Intern",
      company: "ABMI Engineering",
      companylogo: require("./assets/images/abmiLogo.jpeg"),
      date: "August 2016 – January 2017",
      desc: "Reverse engineering of a coffee machine code",
      descBullets: [
        "Analysing the code and translate it to Flow Chart",
        "Integrating new function in order to resolve technical problems",
        "Designing a PCB for an electrical cigarette on KiCAD"
      ]
    },
    {
      role: "Embedded Software and Automation Intern",
      company: "Texas Instruments",
      companylogo: require("./assets/images/tiLogo.jpg"),
      date: "May 2018 – October 2018",
      desc: "Developing a global automated test setup for Hercules Microcontroller peripherals (CAN, ADC, RAM, CPU,...)",
      descBullets: [
        "Integrating new function in peripheral tests protocols by using embedded C",
        "Developing a global LabVIEW Program in order to test all the Microcontroller peripherals automatically, and showing the results for each peripheral in real time, to the tester through a Graphical User Interface (GUI)",
        "PCB design with Altium"
      ]
    },
    {
      role: "Embedded Automated Testing Engineer",
      company: "EVBox",
      companylogo: require("./assets/images/evboxLogo.jpg"),
      date: "Jan 2019 – Present",
      desc: "EVBox is the leading global manufacturer of electric vehicle charging stations and charging management software. With an installed base of over 60,000 charging points across more than 45 countries worldwide, EVBox drives sustainable mobility by bringing leading electric vehicle charging solutions to the world."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "One of my hobbies is to explain difficult notions with the way I understood them and with the most easiest manner",

  blogs: [
    {
      url: "#blogs",
      title: "How does a compiler work?",
      description: "Coming soon!"
    },
    {
      url: "#blogs",
      title: "How do pointers work in C?",
      description: "Coming soon!"
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me 📞 📩"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+31-617984733",
  email_address: "kaziz.anas@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};