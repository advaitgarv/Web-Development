import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="container max-w-5xl mx-auto">
        <h2 className="mb-12 text-center text-3xl md:text-4xl font-bold">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Full Stack Developer
            </h3>

            <p className="text-muted-foreground">
              I'm Advait Garv, a dedicated Web and Software Developer with a
              passion for creating innovative digital solutions. With expertise
              in modern technologies and a keen eye for design, I strive to
              build applications that are not only functional but also visually
              appealing. My journey in development is driven by a love for
              problem-solving and a commitment to continuous learning.
            </p>

            <p className="text-muted-foreground">
              With over 2 years of experience in web and software development, I
              specialize in building comprehensive web applications that deliver
              seamless user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border border-primary text-primary rounded-full
                hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Web Development */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive and dynamic web applications using
                    modern frameworks and technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Creating intuitive and visually appealing user interfaces
                    that enhance user experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from concept to completion, ensuring timely
                    delivery and quality outcomes through effective
                    communication and teamwork.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
