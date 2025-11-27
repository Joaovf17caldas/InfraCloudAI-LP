import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

interface HeroProps {
  onCtaClick: () => void;
}

const Hero = ({ onCtaClick }: HeroProps) => {
  return (
    <section id="inicio" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Infraestrutura Inteligente em Minutos,{" "}
            <span className="text-primary">sem Equipe de TI</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Crie, gerencie e proteja toda a infraestrutura da sua empresa com
            Inteligência Artificial – simples, rápido e acessível.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="cta" size="lg" onClick={onCtaClick} className="group">
              Quero Minha Infraestrutura Agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="mt-12 rounded-2xl overflow-hidden shadow-hover border border-border/50">
            <img
              src={heroDashboard}
              alt="Dashboard InfraCloud AI mostrando monitoramento inteligente de servidores"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
