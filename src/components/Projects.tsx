import projectCloset from "@/assets/project-closet.jpg";
import projectLiving from "@/assets/project-living.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";

const projects = [
  {
    image: projectKitchen,
    title: "Cozinha Moderna",
    category: "Cozinha Planejada",
  },
  {
    image: projectCloset,
    title: "Closet Funcional",
    category: "Armário e Closet",
  },
  {
    image: projectLiving,
    title: "Sala de Estar",
    category: "Móveis para Sala",
  },
  {
    image: projectOffice,
    title: "Home Office",
    category: "Escritório",
  },
  {
    image: projectBathroom,
    title: "Banheiro Elegante",
    category: "Móveis para Banheiro",
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-sans text-sm tracking-[0.2em] uppercase text-gold mb-4">
            Portfólio
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Nossos Projetos
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            Confira alguns dos nossos trabalhos realizados com dedicação e qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500 ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 ? "aspect-[4/3]" : "aspect-square"}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="font-sans text-sm text-gold uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-primary-foreground">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
