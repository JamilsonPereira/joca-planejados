import heroImage from "@/assets/hero-kitchen.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cozinha planejada de luxo"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <span className="inline-block font-sans text-sm tracking-[0.3em] uppercase text-gold mb-6 animate-fade-up opacity-0">
          Móveis Planejados Premium
        </span>
        
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground mb-6 animate-fade-up opacity-0 animation-delay-100">
          Transformamos Sonhos<br />
          <span className="text-gold">em Realidade</span>
        </h1>
        
        <p className="font-sans text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 animation-delay-200">
          Móveis exclusivos, projetados sob medida para cada espaço. 
          Design sofisticado que reflete sua personalidade.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 animation-delay-300">
          <a
            href="#projetos"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold text-primary-foreground font-sans font-medium rounded-lg hover:bg-gold/90 transition-all duration-300 hover:shadow-elevated"
          >
            Ver Projetos
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground/10 text-primary-foreground font-sans font-medium rounded-lg border border-primary-foreground/30 hover:bg-primary-foreground/20 transition-all duration-300"
          >
            Fale Conosco
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 animation-delay-400">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
