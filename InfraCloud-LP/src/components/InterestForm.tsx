import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface InterestFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const InterestForm = ({ open, onOpenChange }: InterestFormProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // MUDE APENAS ESTA LINHA COM SEU ACCESS KEY ↓↓↓
  const WEB3FORMS_ACCESS_KEY = "462d407c-de6f-4660-9c25-87aecb359f5a"; // ← cole aqui

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    
    // Adiciona campos extras pro email ficar bonito
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `Novo Lead - ${formData.get("name")} - InfraCloudAI`);
    formData.append("from_name", "InfraCloudAI LP");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Enviado com sucesso!",
          description: "Entraremos em contato em até 24h.",
        });
        e.currentTarget.reset();
        onOpenChange(false);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou mande direto pro WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Começar agora</DialogTitle>
          <DialogDescription>
            Preencha o formulário e nossa equipe entrará em contato em até 24 horas.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              name="name"
              placeholder="Seu nome"
              required
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail corporativo</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              required
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Empresa</Label>
            <Input
              id="company"
              name="company"
              placeholder="Nome da empresa"
              required
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(00) 00000-0000"
              required
              disabled={isLoading}
            />
          </div>

          <Button
            type="submit"
            variant="cta"
            className="w-full"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? "Enviando..." : "Enviar Interesse"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InterestForm;
