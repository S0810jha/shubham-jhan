import React from 'react';
import { Code2, Server, Database } from 'lucide-react';

export const skills = [
  {
    category: "Frontend",
    icon: <Code2 className="w-6 h-6 text-cyan-400" />,
    items: ["React.js", "Tailwind CSS", "HTML5/CSS3", "JavaScript (ES6+)", "React Context API", "Axios", "Responsive UI/UX Design"]
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6 text-purple-400" />,
    items: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "MVC Architecture", "Bcrypt", "Middleware Integration", "API Integration", "Socket.io"]
  },
  {
    category: "Languages & Tools",
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    items: ["C++", "DSA (Data Structures)", "MongoDB", "Mongoose", "System Design" ,"Git & GitHub", "Postman", "VS Code"]
  }
];

export const projects = [
  {
    title: "Doctors Booking System",
    tech: ["MERN Stack", "TailwindCSS", "JWT", "Context API"],
    description: "A full-stack platform featuring secure user authentication and Role-Based Access Control (RBAC) for patients and healthcare providers.",
    points: [
      "Engineered secure user authentication and Role-Based Access Control (RBAC).",
      "Developed robust RESTful APIs for managing appointments with comprehensive validation.",
      "Implemented a real-time slot availability system to streamline the booking process."
    ],
    link: "https://apollacite.vercel.app/",
    git: "https://github.com/S0810jha/apollacite"
  },
  {
    title: "Real-Time Blog Platform",
    tech: ["MERN Stack", "TailwindCSS", "Socket.io", "Context API"],
    description: "A dual-portal system featuring real-time data synchronization for instant updates on user interactions and high-concurrency data integrity.",
    points: [
      "Architected real-time data synchronization via Socket.io for instant interaction updates.",
      "Enhanced performance using React Context API and memoization to reduce re-renders.",
      "Maintained data integrity during high-concurrency via MongoDB atomic updates and pagination."
    ],
    link: "https://blog-26.vercel.app/", 
    git: "https://github.com/S0810jha/BLOG26" 
  },
  {
    title: "Task Manager Dashboard",
    tech: ["MERN Stack", "Chart.js", "TailwindCSS", "JWT", "Context API"],
    description: "An interactive dashboard for task management. Includes CRUD functionality and visual data representation using dynamic charts for task status.",
    points: [
      "Complete CRUD (Add, Update, Delete tasks)",
      "Dynamic circular pie chart for status visualization",
      "Real-time UI updates"
    ],
    link: "https://task-manager-brown-eight-57.vercel.app/",
    git: "https://github.com/S0810jha/Task-Manager"
  }
];