import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

// Importa todas as imagens (obrigatório no Vite!)
import Dashboard from "@/assets/Dashboard.png";
import Infraestruturas from "@/assets/Infraestruturas.png";
import Monitoramento from "@/assets/Monitoramento.png";
import Alertas from "@/assets/Alertas.png";
import Backups from "@/assets/Backups.png";
import Seguranca from "@/assets/Seguranca.png";
import ControleCustos from "@/assets/ControleCustos.png";
import Users from "@/assets/Users.png";
import Auditoria from "@/assets/Auditoria.png";
import AssistenteAI from "@/assets/AssistenteAI.png";
import Configuracoes from "@/assets/Configuracoes.png";

const screenshots = [
  Dashboard,
  Infraestruturas,
  Monitoramento,
  Alertas,
  Backups,
  Seguranca,
  ControleCustos,
  Users,
  Auditoria,
  AssistenteAI,
  Configuracoes,
];

interface HeroProps {
  onCtaClick: () => void;
}

const Hero = ({ onCtaClick }: HeroProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % screenshots.length);

  return (
    <section id="inicio" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

      <div className="container relative">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Infraestrutura Inteligente em Minutos,{" "}
            <span className="text-primary">sem Equipe de TI</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Crie, gerencie e proteja toda a infraestrutura da sua empresa com
            Inteligência Artificial — simples, rápido e acessível.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="cta" size="lg" onClick={onCtaClick} className="group">
              Quero Minha Infraestrutura Agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* CARROSSEL */}
          <div className="mt-20 lg:mt-28 max-w-full px-4 sm:px-6 lg:px-8">
            <div className="relative mx-auto max-w-7xl">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-8 ring-primary/10 bg-white/95 backdrop-blur-sm">
                
                {/* Container com proporção perfeita pras suas telas */}
                <div className="relative aspect-[3/2] sm:aspect-[4/3] lg:aspect-[5/3] overflow-hidden">
                  {screenshots.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`Tela do InfraCloud AI - ${index + 1}`}
                      className={`absolute inset-0 h-full w-full object-contain object-center transition-all duration-1000 ease-in-out ${
                        index === currentIndex
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-102"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Setas grandes e bonitas */}
              <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-600/90 hover:bg-blue-700 text-white shadow-2xl p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10 border border-blue-400/50"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600/90 hover:bg-blue-700 text-white shadow-2xl p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10 border border-blue-400/50"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* Pontinhos maiores e mais visíveis */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 ${
                      index === currentIndex
                        ? "w-12 h-3 bg-primary rounded-full"
                        : "w-3 h-3 bg-gray-400 rounded-full hover:bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Legenda (opcional) */}
            <p className="mt-20 text-center text-lg md:text-xl text-muted-foreground font-medium">
              {currentIndex === 0 && "Dashboard completo com visão 360° da infraestrutura"}
              {currentIndex === 1 && "Gerenciamento total de infraestruturas em nuvem e on-premise"}
              {currentIndex === 2 && "Monitoramento em tempo real com IA preditiva"}
              {currentIndex === 3 && "Alertas inteligentes com resposta automática"}
              {currentIndex === 4 && "Backups automáticos e recuperação em minutos"}
              {currentIndex === 5 && "Segurança avançada com bloqueio de ameaças por IA"}
              {currentIndex === 6 && "Controle total de custos com otimização automática"}
              {currentIndex === 7 && "Gestão completa de usuários e permissões"}
              {currentIndex === 8 && "Auditoria detalhada de todas as ações"}
              {currentIndex === 9 && "Assistente de IA 24/7 para suporte técnico"}
              {currentIndex === 10 && "Configurações avançadas e personalização total"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
