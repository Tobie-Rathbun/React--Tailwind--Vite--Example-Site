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
    carrent,
    jobit,
    tripguide,
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
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };