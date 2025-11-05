import { HelpCircle, BookOpen, MessageCircle, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Help = () => {
  const faqs = [
    {
      question: "Como funciona a busca de jurisprudências?",
      answer: "Digite o número do processo no campo de busca. Nossa IA analisará o processo e buscará as jurisprudências mais relevantes na base de dados do Tribunal, destacando a mais aplicável ao caso.",
    },
    {
      question: "O que significa quando uma jurisprudência está destacada?",
      answer: "A jurisprudência destacada com a tag 'Mais Relevante (IA)' é aquela que nosso sistema de inteligência artificial identificou como mais aplicável ao processo consultado, baseado em análise contextual.",
    },
    {
      question: "Como usar o chat com a IA?",
      answer: "Após realizar uma busca, clique em 'Iniciar Chat com a IA'. Você poderá fazer perguntas sobre o processo, pedir esclarecimentos sobre as jurisprudências encontradas e obter análises detalhadas.",
    },
    {
      question: "Como acessar minhas consultas anteriores?",
      answer: "Acesse o menu 'Histórico' no topo da página. Lá você encontrará todas as suas consultas anteriores e poderá reabri-las a qualquer momento.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Cabeçalho */}
          <div className="mb-8 animate-fade-in text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
              <HelpCircle className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-3xl font-bold text-primary mb-2">Central de Ajuda</h1>
            <p className="text-muted-foreground">
              Encontre respostas para suas dúvidas sobre o Atlas Jurisprudências
            </p>
          </div>

          {/* Cards de Contato */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <Card className="text-center hover:shadow-medium transition-all">
              <CardHeader>
                <BookOpen className="w-8 h-8 text-accent mx-auto mb-2" />
                <CardTitle className="text-lg">Documentação</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Guias completos de uso do sistema
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-medium transition-all">
              <CardHeader>
                <MessageCircle className="w-8 h-8 text-accent mx-auto mb-2" />
                <CardTitle className="text-lg">Chat Online</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Suporte em tempo real
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-medium transition-all">
              <CardHeader>
                <Mail className="w-8 h-8 text-accent mx-auto mb-2" />
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  suporte@atlas.tj.gov.br
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* FAQ */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Perguntas Frequentes</CardTitle>
              <CardDescription>
                Respostas para as dúvidas mais comuns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-primary hover:text-accent transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Help;
