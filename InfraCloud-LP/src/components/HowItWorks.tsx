import { Settings, Cpu, BarChart3 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Settings,
      title: "Configure em 3 cliques",
      description: "Você diz quantos usuários e qual sistema usa.",
    },
    {
      icon: Cpu,
      title: "A IA faz tudo por você",
      description: "Provisionamento de servidores, segurança e backup automático.",
    },
    {
      icon: BarChart3,
      title: "Monitore sem esforço",
      description: "Painel simples com alertas inteligentes e IA preditiva.",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como a InfraCloud AI simplifica sua vida
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center p-8 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <div className="mb-6 p-4 rounded-full bg-primary/10">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
