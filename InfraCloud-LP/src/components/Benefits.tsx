import { CheckCircle2, DollarSign, Shield, TrendingUp, Headphones } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Custo Reduzido",
      description: "Até 80% mais barato que equipe própria.",
    },
    {
      icon: Shield,
      title: "Segurança Avançada",
      description: "Padrão enterprise com zero trust nativo.",
    },
    {
      icon: TrendingUp,
      title: "Escalabilidade Automática",
      description: "Cresça sem dor de cabeça.",
    },
    {
      icon: Headphones,
      title: "Suporte Inteligente",
      description: "Agentes de IA resolvem problemas em minutos.",
    },
  ];

  return (
    <section id="beneficios" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher a InfraCloud AI?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-card group"
            >
              <div className="mb-4 p-3 rounded-lg bg-accent/10 w-fit">
                <benefit.icon className="h-6 w-6 text-accent" />
              </div>
              <div className="flex items-start gap-2 mb-2">
                <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm ml-7">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
