import { Button } from "@/components/ui/button";
import { Cloud } from "lucide-react";

interface HeaderProps {
  onCtaClick: () => void;
}

const Header = ({ onCtaClick }: HeaderProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Cloud className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">
            InfraCloud AI
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("como-funciona")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Como Funciona
          </button>
          <button
            onClick={() => scrollToSection("beneficios")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Benefícios
          </button>
          <button
            onClick={() => scrollToSection("planos")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Planos
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contato
          </button>
        </nav>

        <Button variant="cta" size="sm" onClick={onCtaClick}>
          Começar Agora
        </Button>
      </div>
    </header>
  );
};

export default Header;
