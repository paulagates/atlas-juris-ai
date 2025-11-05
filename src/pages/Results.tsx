import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MessageSquare, Scale } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JurisprudenceCard from "@/components/JurisprudenceCard";
import ChatInterface from "@/components/ChatInterface";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Results = () => {
  const [searchParams] = useSearchParams();
  const processNumber = searchParams.get("processo") || "";
  const [showChat, setShowChat] = useState(false);

  // Dados mockados de jurisprudências
  const jurisprudences = [
    {
      id: "1",
      title: "Recurso Especial - Direito Civil - Responsabilidade Civil",
      tribunal: "STJ - Superior Tribunal de Justiça",
      date: "15/03/2024",
      excerpt: "A responsabilidade civil por danos morais e materiais decorrentes de acidente de trânsito é objetiva quando comprovado o nexo causal entre a conduta e o dano. Precedentes jurisprudenciais consolidados neste sentido.",
      isHighlighted: true,
    },
    {
      id: "2",
      title: "Agravo de Instrumento - Processo Civil",
      tribunal: "TJSP - Tribunal de Justiça de São Paulo",
      date: "10/03/2024",
      excerpt: "O deferimento de liminar em tutela de urgência requer a demonstração inequívoca dos requisitos de probabilidade do direito e perigo de dano ou risco ao resultado útil do processo.",
      isHighlighted: false,
    },
    {
      id: "3",
      title: "Apelação Cível - Contratos",
      tribunal: "TJRJ - Tribunal de Justiça do Rio de Janeiro",
      date: "05/03/2024",
      excerpt: "A revisão contratual por onerosidade excessiva é cabível quando demonstrada alteração substancial das circunstâncias que fundamentaram a celebração do negócio jurídico.",
      isHighlighted: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Cabeçalho dos Resultados */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Scale className="w-4 h-4" />
            <span className="text-sm">Processo</span>
          </div>
          <h1 className="text-3xl font-bold text-primary mb-2">
            Jurisprudências relacionadas
          </h1>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="text-base px-3 py-1">
              {processNumber}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {jurisprudences.length} jurisprudências encontradas
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Lista de Jurisprudências */}
          <div className="lg:col-span-2 space-y-4">
            {jurisprudences.map((jurisprudence) => (
              <JurisprudenceCard
                key={jurisprudence.id}
                {...jurisprudence}
                onViewDetails={() => {
                  console.log("Ver detalhes:", jurisprudence.id);
                }}
              />
            ))}
          </div>

          {/* Sidebar com Chat */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {!showChat ? (
                <div className="bg-card rounded-xl border border-border shadow-medium p-6 text-center animate-fade-in">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                    <MessageSquare className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Converse com a IA
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Tire dúvidas sobre o processo e as jurisprudências encontradas
                  </p>
                  <Button
                    onClick={() => setShowChat(true)}
                    className="w-full bg-gradient-primary hover:opacity-90"
                    size="lg"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Iniciar Chat com a IA
                  </Button>
                </div>
              ) : (
                <ChatInterface />
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Results;
