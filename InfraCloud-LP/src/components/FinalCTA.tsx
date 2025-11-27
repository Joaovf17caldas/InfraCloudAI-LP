import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface FinalCTAProps {
  onCtaClick: () => void;
}

const FinalCTA = ({ onCtaClick }: FinalCTAProps) => {
  return (
    <section id="contato" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-card border-2 border-primary/20 rounded-3xl p-12 md:p-16 shadow-hover">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-accent/10">
              <Sparkles className="h-8 w-8 text-accent" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Pronto para transformar a TI da sua empresa?
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Crie sua infraestrutura inteligente agora e esqueça a dor de cabeça com servidores.
          </p>

          <Button variant="cta" size="lg" onClick={onCtaClick} className="group">
            Começar Agora
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-sm text-muted-foreground">
            Sem necessidade de cartão de crédito • Suporte em português • Configuração em minutos
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
