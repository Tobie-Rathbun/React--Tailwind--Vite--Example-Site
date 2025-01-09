import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    php,
    manpower,
    flutter,
    illustrator,
    rpscard,
    texasholdem,
    pokerfrogs,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Front End and UX Design",
      icon: web,
    },
    {
      title: "React Component Development",
      icon: mobile,
    },
    {
      title: "Back End Functionality",
      icon: backend,
    },
    {
      title: "3D Animation",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Test Associate II",
      company_name: "ManpowerGroup",
      icon: manpower,
      iconBg: "#383E56",
      date: "June 2022 - Sept 2024",
      points: [
        "Agile and Scrum environment using Azure DevOps",
        "Writing bug reports, providing logs and media, knowledge of applications",
        "Script writing in batch or Python to assist in tasks or moving files",
        "Modifying an existing GUI and custom tool in C#",
        "Querying databases, automating reminders and links, automating emails",
      ],
    },
    {
      title: "Full Stack Developer Contract",
      company_name: "Garner Resources",
      icon: php,
      iconBg: "#E6DEDD",
      date: "Oct 2021 - Dec 2021",
      points: [
        "Locally testing server with XAMPP on Windows and on Linux",
        "Updating PHP version, and modifying code to account for deprecated logic",
        "FTP Automatic File Transfer with FileZilla",
        "Solution deployment to Amazon Web Services (AWS)",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "AttuneOne",
      icon: flutter,
      iconBg: "#383E56",
      date: "Mar 2020 - Oct 2021",
      points: [
        "Designed Flutter applications deployed to iOS, Android, and web platforms",
        "Built scalable and secure full-stack applications for business objectives",
      ],
    },
    {
      title: "Graphic & Web Designer",
      company_name: "ASU & Freelance",
      icon: illustrator,
      iconBg: "#E6DEDD",
      date: "Jan 2017 - Present",
      points: [
        "Designing front end of websites for memorable user experience and interactivity",
        "Designing & delivering graphic design for both print and web, managing clients",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Tobie really did the dang thing. I am impressed with his tenacity.",
      name: "Anita Joweb",
      designation: "CTO",
      company: "Notta Inc.",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who is as driven as Tobie.",
      name: "Rocky Rhode",
      designation: "CEO",
      company: "Rocky's Ice Cream Co",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Tobie optimized our website SEO, our traffic increased by 50%. We can't thank them enough!",
      name: "Nadia Brough",
      designation: "CTO",
      company: "NE Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Rock Paper Scissors",
      description:
        "The Rock, Paper, Scissors simulator runs through many iterations of gameplay where the user decision is randomly selected and the AI computer makes educated guesses based on past outcomes. The computer balances turn decisions between its two outcome tracking methods: counterfactual regret minimization and the Markov chain, which is a matrix of past moves graphed by their previous move. Different user move patterns can be selected with a dropdown.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: rpscard,
      source_code_link: "https://github.com/Tobie-Rathbun/React-Portfolio--Next.js-/blob/master/src/app/rockpaperscissors/page.tsx",
    },
    {
      name: "Texas Hold Em",
      description:
        "The 2D Poker Game uses logic written in React JSX with a decision matrix and counterfactual regret minimization implmementation that is based on concepts I explored in the Rock, Paper, Scissors simulator. The AI will make educated guesses for turns and over many iterations will learn to play better hands. The win likelihood percentage is calculated from an external library titled pokersolver with credit and thanks to goldfire.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: texasholdem,
      source_code_link: "https://github.com/Tobie-Rathbun/React-Portfolio--Next.js-/blob/master/src/app/texasholdem/page.tsx",
    },
    {
      name: "Poker Frogs",
      description:
        "The 3D Poker Game showcases draggable panel components that are imported and update with live data from the cards dealt within the game logic that runs alongside the Babylon 3D scene in the page.tsx that contains the code for the webpage. I drew graphics for the front and back of a whole deck of cards in Adobe Illustrator and then applied the images as a UV Texture over the 3D objects in React using the Babylon.js library.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "babylonjs",
          color: "green-text-gradient",
        },
        {
          name: "adobeillustrator",
          color: "pink-text-gradient",
        },
      ],
      image: pokerfrogs,
      source_code_link: "https://github.com/Tobie-Rathbun/React-Portfolio--Next.js-/blob/master/src/app/pokerfrogs/page.tsx",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };