import { Award, Clock, Users, Ruler } from "lucide-react";

const features = [
  {
    icon: Ruler,
    title: "Sob Medida",
    description: "Cada projeto é único, desenvolvido exclusivamente para seu espaço.",
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Materiais de primeira linha e acabamento impecável.",
  },
  {
    icon: Clock,
    title: "Pontualidade",
    description: "Compromisso com prazos e entregas no tempo certo.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Acompanhamento do projeto do início ao fim.",
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-sans text-sm tracking-[0.2em] uppercase text-gold mb-4">
            Sobre Nós
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Excelência em Cada Detalhe
          </h2>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">
            Com mais de 15 anos de experiência no mercado de móveis planejados, 
            transformamos ambientes em espaços funcionais e elegantes. Nossa equipe 
            de designers e marceneiros trabalha para entregar o melhor resultado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
