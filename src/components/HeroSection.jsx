import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Picture */}
          <div className="flex justify-center lg:order-2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl opacity-0 animate-fade-in-delay-1">
                <img
                  src="/profile.jpg"
                  alt="Sharanya Chowdhury"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              {/* Floating animation ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>
              <div className="absolute -inset-2 rounded-full border border-primary/20 animate-ping"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left lg:order-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> Hi, I am</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Sharanya
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Chowdhury
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3">
              I create stellar web experiences with modern technologies.
              Specializing in MERN-stack development, I build interfaces that
              are both beautiful and functional.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
