import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Preciso ter conhecimento técnico?",
      answer:
        "Não. Nossa IA faz tudo por você, sem precisar entender de nuvem ou servidores. A interface é intuitiva e guiada.",
    },
    {
      question: "Posso migrar meu sistema atual?",
      answer:
        "Sim! Migramos seus dados com segurança e sem downtime. Nossa equipe acompanha todo o processo de migração.",
    },
    {
      question: "Como funciona o suporte?",
      answer:
        "Oferecemos suporte 24/7 através de agentes de IA inteligentes que resolvem a maioria dos problemas em minutos. Para casos complexos, nossa equipe humana está disponível.",
    },
    {
      question: "A infraestrutura é segura?",
      answer:
        "Sim. Utilizamos padrões enterprise de segurança, incluindo criptografia, zero trust, backups automáticos e compliance com LGPD.",
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer:
        "Sim, sem multas ou taxas. Você pode cancelar seu plano a qualquer momento e mantém acesso até o fim do período pago.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-background"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
