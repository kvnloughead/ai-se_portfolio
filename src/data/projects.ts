import type { Project } from "../types";
import taskflowImg from "../assets/projects/taskflow.svg";
import recipeboxImg from "../assets/projects/recipebox.svg";
import weathernowImg from "../assets/projects/weathernow.svg";

// Edit this file with your own projects. Screenshots are placeholders —
// swap the imports above for real images (e.g. src/assets/projects/*.png).
export const projects: Project[] = [
  {
    id: "taskflow",
    name: "TaskFlow",
    description: [
      "A drag-and-drop task board for small teams, with real-time updates " +
        "and per-board permissions. ",
      "Built with React, Express, and MongoDB.",
    ],
    image: taskflowImg,
    githubUrl: "https://github.com/jordanrivera/taskflow",
    liveUrl: "https://taskflow.example.com",
  },
  {
    id: "recipebox",
    name: "RecipeBox",
    description: [
      "A recipe organizer with tagging, search, and shareable collections. " +
        "Includes a public API for browsing recipes without an account.",
    ],
    image: recipeboxImg,
    githubUrl: "https://github.com/jordanrivera/recipebox",
    liveUrl: "https://recipebox.example.com",
  },
  {
    id: "weathernow",
    name: "WeatherNow",
    description: [
      "A weather dashboard with hourly forecasts and saved locations, " +
        "built on a public weather API with client-side caching.",
    ],
    image: weathernowImg,
    githubUrl: "https://github.com/jordanrivera/weathernow",
    liveUrl: "https://weathernow.example.com",
  },
  {
    id: "placeholder",
    name: "Placeholder",
    description: ["Placeholder project"],
    image: weathernowImg,
    githubUrl: "https://github.com/jordanrivera/placeholder",
    liveUrl: "https://placeholder.example.com",
  },
];
