import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Com a InfraCloud AI, economizamos 70% em custos de TI e ganhamos segurança.",
      author: "João Silva",
      role: "CEO de PME",
      company: "TechStart",
    },
    {
      quote: "A migração foi perfeita. Em 24h estávamos operando com infraestrutura enterprise.",
      author: "Maria Santos",
      role: "CTO",
      company: "Inovação Digital",
    },
    {
      quote: "Suporte por IA que realmente funciona. Problemas resolvidos em minutos, não horas.",
      author: "Carlos Oliveira",
      role: "Diretor de TI",
      company: "Varejo Online",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Empresas que já confiam na InfraCloud AI
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card"
            >
              <Quote className="h-10 w-10 text-primary/20 mb-4" />
              <p className="text-foreground mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} • {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
