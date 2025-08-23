import { Rocket, Globe, Zap, Target } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Rocket,
      title: "Space Technology",
      description: "Investing in cutting-edge propulsion systems and spacecraft technology for the next generation of space exploration."
    },
    {
      icon: Globe,
      title: "Planetary Scale",
      description: "Building solutions that can operate across multiple worlds and advance human civilization beyond Earth."
    },
    {
      icon: Zap,
      title: "Energy Innovation",
      description: "Developing revolutionary energy systems to power humanity's expansion into the cosmos."
    },
    {
      icon: Target,
      title: "Strategic Focus",
      description: "Targeted investments in companies that align with our mission of advancing human potential."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold hero-text mb-6">
            The Future is Multi-Planetary
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We invest in technologies and ventures that will define humanity's next chapter among the stars.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;