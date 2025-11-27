import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

interface PricingProps {
  onCtaClick: () => void;
}

const Pricing = ({ onCtaClick }: PricingProps) => {
  const plans = [
    {
      name: "Essencial",
      price: "R$ 499",
      period: "/mês",
      features: [
        "Até 50 usuários",
        "Servidores automatizados",
        "Monitoramento básico",
        "Backup diário",
      ],
      isPopular: false,
    },
    {
      name: "Avançado",
      price: "R$ 999",
      period: "/mês",
      features: [
        "Até 200 usuários",
        "Backup e segurança avançada",
        "Suporte por IA 24h",
        "Escalabilidade automática",
        "Dashboard personalizado",
      ],
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: "Sob consulta",
      period: "",
      features: [
        "Usuários ilimitados",
        "Compliance LGPD + auditoria",
        "Consultoria dedicada",
        "SLA garantido",
        "Integração customizada",
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="planos" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Planos simples para todos os tamanhos de negócio
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-hover ${
                plan.isPopular
                  ? "border-accent bg-accent/5 shadow-card scale-105"
                  : "border-border bg-background"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  Mais Vendido
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-primary">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.isPopular ? "cta" : "outline"}
                className="w-full"
                size="lg"
                onClick={onCtaClick}
              >
                {plan.name === "Enterprise" ? "Fale Conosco" : "Assine Agora"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
