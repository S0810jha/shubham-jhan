import React from 'react';
import { Code2, Server, Database } from 'lucide-react';

export const skills = [
  {
    category: "Frontend",
    icon: <Code2 className="w-6 h-6 text-cyan-400" />,
    items: ["React.js", "Tailwind CSS", "HTML5/CSS3", "JavaScript (ES6+)", "Context API", "Axios"]
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6 text-purple-400" />,
    items: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "MVC Architecture", "Bcrypt"]
  },
  {
    category: "Languages & Tools",
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    items: ["C++", "DSA (Data Structures)", "MongoDB", "Mongoose", "Git & GitHub", "Postman", "VS Code"]
  }
];

export const projects = [
  {
    title: "Doctors Booking System",
    tech: ["MERN Stack", "Tailwind", "JWT"],
    description: "A full-stack platform with role-based access for patients and doctors. Features real-time slot availability, appointment booking/tracking, and secure authentication.",
    points: [
      "Secure user authentication & role-based access",
      "RESTful APIs for appointments & profiles",
      "Optimized database structure for fast querying"
    ],
    link: "https://apollacite.vercel.app/",
    git: "https://github.com/S0810jha/apollacite"
  },
  {
    title: "Task Manager Dashboard",
    tech: ["MERN Stack", "Chart.js", "Tailwind"],
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