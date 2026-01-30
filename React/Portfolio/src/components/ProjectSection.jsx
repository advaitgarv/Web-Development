import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Employee Management System",
    description:
      "A web application to manage employee records, attendance, and performance reviews.",
    image: "/Project/Project1.png",
    tags: ["Java", "Spring Boot", "MySQL"],
  },
  {
    id: 2,
    title: "Indian Sign Language Recognition",
    description:
      "A machine learning model to recognize and translate Indian Sign Language.",
    image: "/Project/Project2.png",
    tags: ["Python", "TensorFlow", "NumPy"],
  },
  {
    id: 3,
    title: "Weather Forecasting App",
    description:
      "An application that provides accurate weather forecasts for different locations.",
    image: "/Project/Project3.png",
    tags: ["JavaScript", "React", "API Integration"],
  },
  {
    id: 4,
    title: "Python Data Analysis Projects",
    description:
      "A collection of projects demonstrating data analysis techniques using Python libraries like Pandas, NumPy, and Matplotlib.",
    image: "/Project/Project4.png",
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-learn",
      "Seaborn",
      "Tkinter",
    ],
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills in
          development and design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div 
              key={key} 
              className="group bg-card rounded-lg overflow-hidden"
              >
             <div className="h-48 overflow-hidden">   
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
                </div>
                <div className="p-6">
                   <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"> 
                          {tag}
                        </span>
                    ))}
                    </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}
                    </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <a 
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/advaitgarv/Web-Development"
            target="_blank">
                Check Out My GitHub<ArrowRight size={16}/>
            </a>

        </div>
      </div>
    </section>
  );
};
