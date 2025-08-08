import { GraduationCap } from "lucide-react";

const educationData = [
  {
    institution: "University Institute Of Technology, Burdwan",
    degree: "Bachelor’s Of Engineering in Information Technology",
    date: "Nov 2023 - Present",
    cgpa: "CGPA - 7.545",
  },
  {
    institution: "West Bengal Survey Institute, Bandel, Hooghly",
    degree: "Diploma in Geoinformatics & Remote Sensing",
    date: "Dec 2020 - July 2023",
    cgpa: "OGPA - 8.3",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 font-retro scroll-mt-20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Education</span>
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="w-5/12"></div>
              <div className="z-10 flex items-center justify-center w-12 h-12 bg-background rounded-full border-2 border-primary">
                <GraduationCap className="text-primary" />
              </div>
              <div className="w-5/12">
                <div
                  className={`p-6 rounded-lg shadow-lg card-hover ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <p className="text-sm text-primary mb-1">{item.date}</p>
                  <h3 className="text-xl font-bold">{item.institution}</h3>
                  <p className="text-md font-semibold mb-2">{item.degree}</p>
                  <p className="text-muted-foreground text-sm">{item.cgpa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
