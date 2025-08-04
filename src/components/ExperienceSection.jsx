import { Briefcase } from "lucide-react";

const experienceData = [
  {
    title: "FULL STACK DEVELOPER INTERN",
    company: "Observations AI",
    date: "June 2025 - Present",
    description:
      "Currently working on Next.js framework for developing/betterment of organization website.",
  },
  {
    title: "Data Annotator",
    company: "Habitat Lens Pvt Ltd.",
    date: "June 2025",
    description:
      "Worked as a collaborator data annotator upon Benchmarking Neural Transcription and Search for Scientific Notes Understanding. Labelled data for physics notes and used Latex symbols for mathematical notations.",
  },
  {
    title: "MERN STACK DEVELOPER",
    company: "Edunet Foundation & EY-GDS",
    date: "Feb 2025 - March 2025",
    description:
      "Engineered a robust E-bidding website for real time auctions with MERN stack technologies.",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Experience</span>
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
          {experienceData.map((item, index) => (
            <div
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="w-5/12"></div>
              <div className="z-10 flex items-center justify-center w-12 h-12 bg-background rounded-full border-2 border-primary">
                <Briefcase className="text-primary" />
              </div>
              <div className="w-5/12">
                <div
                  className={`p-6 rounded-lg shadow-lg card-hover ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <p className="text-sm text-primary mb-1">{item.date}</p>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-md font-semibold mb-2">{item.company}</p>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
