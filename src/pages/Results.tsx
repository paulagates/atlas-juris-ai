import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MessageSquare, Scale, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JurisprudenceCard from "@/components/JurisprudenceCard";
import ChatInterface from "@/components/ChatInterface";
import JurisprudenceDetailDialog from "@/components/JurisprudenceDetailDialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Results = () => {
  const [searchParams] = useSearchParams();
  const processNumber = searchParams.get("processo") || "";
  const tema = searchParams.get("tema") || "";
  const arquivo = searchParams.get("arquivo") || "";
  const [showChat, setShowChat] = useState(false);
  const [selectedJurisprudence, setSelectedJurisprudence] = useState<any>(null);
  const [showDetailDialog, setShowDetailDialog] = useState(false);

  // Determina se deve mostrar jurisprudência destacada (apenas para processo ou arquivo)
  const shouldShowHighlighted = !!(processNumber || arquivo) && !tema;

  // Dados mockados de jurisprudências
  const jurisprudences = [
    {
      id: "1",
      title: "Recurso Especial - Direito Civil - Responsabilidade Civil",
      tribunal: "STJ - Superior Tribunal de Justiça",
      date: "15/03/2024",
      excerpt: "A responsabilidade civil por danos morais e materiais decorrentes de acidente de trânsito é objetiva quando comprovado o nexo causal entre a conduta e o dano. Precedentes jurisprudenciais consolidados neste sentido.",
      relevanceReason: "Precedente vinculante do STJ com aplicação direta ao caso. Aborda especificamente a questão da responsabilidade objetiva em acidentes de trânsito, que é o tema central do processo consultado.",
      isHighlighted: shouldShowHighlighted,
      processNumber: "REsp 1.234.567/SP",
      relator: "Min. Nancy Andrighi",
      tags: ["Responsabilidade Civil", "Acidente de Trânsito", "Nexo Causal"],
      fullText: `RECURSO ESPECIAL. DIREITO CIVIL. RESPONSABILIDADE CIVIL. ACIDENTE DE TRÂNSITO. DANOS MORAIS E MATERIAIS.

VOTO

O presente recurso especial merece conhecimento e provimento.

Trata-se de ação de indenização por danos morais e materiais decorrentes de acidente de trânsito. A controvérsia cinge-se à responsabilidade civil do condutor do veículo que causou o acidente.

A jurisprudência desta Corte é pacífica no sentido de que a responsabilidade civil por danos decorrentes de acidente de trânsito é objetiva quando comprovado o nexo causal entre a conduta e o dano causado. Tal entendimento encontra amparo no artigo 927 do Código Civil e no princípio da reparação integral dos danos.

No caso dos autos, restou demonstrado de forma inequívoca que o acidente foi causado por culpa exclusiva do réu, que trafegava em velocidade incompatível com o local e desrespeitou a sinalização de parada obrigatória. O nexo causal entre a conduta do réu e os danos sofridos pela vítima está amplamente comprovado nos autos através de prova testemunhal e pericial.

Quanto aos danos morais, a jurisprudência deste Tribunal Superior tem reconhecido sua configuração em casos de lesões graves decorrentes de acidentes de trânsito, notadamente quando há sequelas permanentes que afetam a qualidade de vida da vítima.

Ante o exposto, conheço do recurso e dou-lhe provimento para condenar o réu ao pagamento de indenização por danos morais e materiais, nos termos da fundamentação.

É como voto.`,
    },
    {
      id: "2",
      title: "Agravo de Instrumento - Processo Civil",
      tribunal: "TJSP - Tribunal de Justiça de São Paulo",
      date: "10/03/2024",
      excerpt: "O deferimento de liminar em tutela de urgência requer a demonstração inequívoca dos requisitos de probabilidade do direito e perigo de dano ou risco ao resultado útil do processo.",
      relevanceReason: "Decisão recente do TJSP que estabelece critérios semelhantes aos aplicados no processo. Jurisprudência dominante no tribunal competente para análise do recurso.",
      isHighlighted: false,
      processNumber: "AI 2.345.678-01.2024.8.26.0000",
      relator: "Des. João Silva",
      tags: ["Tutela de Urgência", "Processo Civil", "Liminar"],
      fullText: `AGRAVO DE INSTRUMENTO. TUTELA DE URGÊNCIA. REQUISITOS NÃO DEMONSTRADOS.

Trata-se de agravo de instrumento interposto contra decisão que indeferiu pedido de tutela de urgência.

O deferimento de tutela de urgência, nos termos do artigo 300 do Código de Processo Civil, exige a demonstração concomitante de dois requisitos: (i) probabilidade do direito alegado; e (ii) perigo de dano ou risco ao resultado útil do processo.

Na hipótese dos autos, verifica-se que o agravante não logrou demonstrar a probabilidade do direito alegado, tendo apresentado apenas alegações genéricas, sem fundamentação jurídica adequada ou prova documental consistente.

Ademais, o alegado perigo de dano não se mostra caracterizado de forma inequívoca, tratando-se de mera suposição de eventual prejuízo futuro, o que não é suficiente para a concessão da medida de urgência pleiteada.

Ante o exposto, nego provimento ao agravo de instrumento, mantendo incólume a decisão agravada.`,
    },
    {
      id: "3",
      title: "Apelação Cível - Contratos",
      tribunal: "TJRJ - Tribunal de Justiça do Rio de Janeiro",
      date: "05/03/2024",
      excerpt: "A revisão contratual por onerosidade excessiva é cabível quando demonstrada alteração substancial das circunstâncias que fundamentaram a celebração do negócio jurídico.",
      relevanceReason: "Caso análogo envolvendo interpretação de cláusulas contratuais em situações excepcionais. Fundamentação utilizada pode servir como argumento subsidiário na peça processual.",
      isHighlighted: false,
      processNumber: "0123456-78.2023.8.19.0001",
      relator: "Des. Maria Santos",
      tags: ["Direito Contratual", "Onerosidade Excessiva", "Revisão"],
      fullText: `APELAÇÃO CÍVEL. DIREITO CONTRATUAL. REVISÃO POR ONEROSIDADE EXCESSIVA.

A questão em debate consiste em verificar a possibilidade de revisão de cláusulas contratuais com base na teoria da imprevisão e onerosidade excessiva.

O artigo 478 do Código Civil autoriza a resolução do contrato quando sua execução se tornar excessivamente onerosa para uma das partes, em razão de acontecimentos extraordinários e imprevisíveis.

No caso concreto, restou comprovado que houve substancial alteração das circunstâncias econômicas que embasaram a celebração do contrato, tornando sua execução extremamente gravosa para o apelante.

A pandemia de COVID-19 e suas consequências econômicas caracterizam evento extraordinário e imprevisível, que alterou profundamente o equilíbrio econômico-financeiro do contrato celebrado entre as partes.

Desta forma, é de rigor a revisão das cláusulas contratuais para restabelecer o equilíbrio da relação jurídica, nos termos do princípio da função social do contrato.

Pelo exposto, dou provimento ao recurso para determinar a revisão das cláusulas contratuais.`,
    },
  ];

  const handleViewDetails = (jurisprudence: any) => {
    setSelectedJurisprudence(jurisprudence);
    setShowDetailDialog(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Cabeçalho dos Resultados */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Scale className="w-4 h-4" />
            <span className="text-sm">
              {processNumber ? "Processo" : tema ? "Tema" : "Busca"}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-primary mb-2">
            Jurisprudências relacionadas
          </h1>
          <div className="flex items-center gap-3 flex-wrap">
            {processNumber && (
              <Badge variant="outline" className="text-base px-3 py-1">
                {processNumber}
              </Badge>
            )}
            {tema && (
              <Badge variant="outline" className="text-base px-3 py-1">
                {tema}
              </Badge>
            )}
            {arquivo && (
              <Badge variant="outline" className="text-base px-3 py-1">
                📎 {arquivo}
              </Badge>
            )}
            <span className="text-sm text-muted-foreground">
              {jurisprudences.length} jurisprudências encontradas
            </span>
          </div>
        </div>

        {/* Botão de Análise Geral */}
        <div className="mb-6 animate-fade-in">
          <Button
            size="lg"
            className="w-full bg-gradient-primary hover:opacity-90"
            onClick={() => {
              console.log("Análise geral iniciada");
              setShowChat(true);
            }}
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Gerar Análise Completa do Caso com todas Jurisprudências
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Lista de Jurisprudências */}
          <div className="lg:col-span-2 space-y-4">
            {jurisprudences.map((jurisprudence) => (
              <JurisprudenceCard
                key={jurisprudence.id}
                {...jurisprudence}
                onViewDetails={() => handleViewDetails(jurisprudence)}
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

      {/* Modal de Detalhes */}
      <JurisprudenceDetailDialog
        open={showDetailDialog}
        onOpenChange={setShowDetailDialog}
        jurisprudence={selectedJurisprudence}
      />
    </div>
  );
};

export default Results;
