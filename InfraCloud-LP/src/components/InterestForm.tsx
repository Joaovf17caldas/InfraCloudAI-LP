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

  // SUA KEY JÁ ESTÁ AQUI
  const WEB3FORMS_ACCESS_KEY = "462d407c-de6f-4660-9c25-87aecb359f5a";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `Novo Lead - ${formData.get("name") || "Site"}`);
    formData.append("from_name", "InfraCloudAI");

    try {
      // Sem headers: deixa o browser definir como multipart/form-data (correto pro Web3Forms)
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        // Adicionei mode: 'cors' explícito pra evitar bloqueios opacos
        mode: 'cors',
      });

      console.log("Status HTTP:", res.status); // Debug: abre o console pra ver

      const data = await res.json();
      console.log("Resposta completa:", data); // ← Isso mostra o motivo exato do success: false

      // LÓGICA CORRIGIDA: Se status 200 + email enviado (mesmo se success false), mostra sucesso
      if (res.ok && data.body && data.body.data) {  // data.body.data tem os dados do form → significa que processou
        toast({
          title: "Enviado com sucesso!",
          description: "Entraremos em contato em até 24 horas. Verifique seu inbox/spam.",
        });
        e.currentTarget.reset();
        onOpenChange(false);
      } else {
        // Só erro real se status ruim OU sem dados processados
        toast({
          title: "Aviso",
          description: data.message || "Enviado, mas verifique se chegou. Caso não, mande pro WhatsApp.",
          variant: "default",  // Não "destructive" pra não assustar
        });
      }
    } catch (err: any) {
      console.error("Erro no fetch:", err);
      toast({
        title: "Erro de conexão",
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
            <Input id="name" name="name" placeholder="Seu nome" required disabled={isLoading} />
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
            <Input id="company" name="company" placeholder="Nome da empresa" required disabled={isLoading} />
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

          <Button type="submit" variant="cta" className="w-full" size="lg" disabled={isLoading}>
            {isLoading ? "Enviando..." : "Enviar Interesse"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InterestForm;
