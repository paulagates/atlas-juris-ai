import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Scale, Sparkles, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JurisprudenceCard from "@/components/JurisprudenceCard";
import JurisprudenceDetailDialog from "@/components/JurisprudenceDetailDialog";
import ProcessSummary from "@/components/ProcessSummary";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Results = () => {
  const [searchParams] = useSearchParams();
  const processNumber = searchParams.get("processo") || "";
  const tema = searchParams.get("tema") || "";
  const arquivo = searchParams.get("arquivo") || "";
  const [selectedJurisprudence, setSelectedJurisprudence] = useState<any>(null);
  const [showDetailDialog, setShowDetailDialog] = useState(false);
  const [showProcessSummary, setShowProcessSummary] = useState(false);

  // Dados do processo
  const processTheme = "Responsabilidade Civil - Acidente de Trânsito";
  const processBriefSummary = "Ação indenizatória por danos morais e materiais decorrentes de acidente de trânsito com lesões corporais e sequelas permanentes.";

  // Determina se deve mostrar jurisprudência destacada (apenas para processo ou arquivo)
  const shouldShowHighlighted = !!(processNumber || arquivo) && !tema;
  
  // Determina se é busca por tema
  const isThemeSearch = !!tema && !processNumber && !arquivo;

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
      isHighlightedOrder: 1,
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
      relevanceReason: "Jurisprudência complementar do TJSP sobre quantificação de danos morais em casos de lesões corporais. Estabelece parâmetros importantes para valoração da indenização em situações análogas ao caso analisado.",
      isHighlighted: shouldShowHighlighted,
      isHighlightedOrder: 2,
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
          <div className="bg-card rounded-xl border border-border shadow-medium p-6">
            <div className="flex items-start justify-between gap-6 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Scale className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-primary">
                      Jurisprudências Relacionadas
                    </h1>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {jurisprudences.length} resultados encontrados
                    </p>
                  </div>
                </div>
                
                {processNumber && (
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-sm px-3 py-1 font-mono">
                      {processNumber}
                    </Badge>
                  </div>
                )}

                {!isThemeSearch && (
                  <div className="space-y-2 pt-3 border-t border-border/50">
                    <h2 className="font-semibold text-primary flex items-center gap-2">
                      <Scale className="w-4 h-4" />
                      {processTheme}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {processBriefSummary}
                    </p>
                  </div>
                )}

                {tema && (
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-sm px-3 py-1">
                      {tema}
                    </Badge>
                  </div>
                )}
                
                {arquivo && (
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-sm px-3 py-1">
                      📎 {arquivo}
                    </Badge>
                  </div>
                )}
              </div>

              {!isThemeSearch && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0"
                        onClick={() => setShowProcessSummary(true)}
                      >
                        <FileText className="w-5 h-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Ver resumo completo do processo</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </div>
        </div>


        <div className="grid lg:grid-cols-3 gap-8">
          {/* Lista de Jurisprudências */}
          <div className="lg:col-span-2 space-y-4">
            {jurisprudences.map((jurisprudence) => (
              <JurisprudenceCard
                key={jurisprudence.id}
                {...jurisprudence}
                showRelevanceReason={false}
                onViewDetails={() => handleViewDetails(jurisprudence)}
              />
            ))}
          </div>

          {/* Sidebar com Análise da IA */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-card rounded-xl border border-border shadow-medium p-6 animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">
                      Análise da IA
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {jurisprudences.filter(j => j.isHighlighted).length > 0 
                        ? "Jurisprudência mais aplicável" 
                        : `${jurisprudences.length} jurisprudências analisadas`}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <p className="text-sm text-foreground/90 leading-relaxed">
                      {jurisprudences.filter(j => j.isHighlighted).length > 0 ? (
                        <>
                          Foram identificadas <strong className="text-primary">2 jurisprudências principais</strong> aplicáveis ao caso:
                          <br /><br />
                          <strong className="text-primary">1. REsp 1.234.567/SP (STJ)</strong> - Precedente vinculante que estabelece 
                          responsabilidade objetiva em acidentes de trânsito quando comprovado o nexo causal entre a conduta e o dano causado. 
                          Este precedente se aplica diretamente ao caso concreto.
                          <br /><br />
                          <strong className="text-primary">2. AI 2.345.678-01.2024.8.26.0000 (TJSP)</strong> - Jurisprudência complementar 
                          que define parâmetros para quantificação de danos morais em casos de lesões corporais, fornecendo critérios 
                          objetivos para valoração da indenização em situações análogas.
                        </>
                      ) : (
                        <>
                          Foram identificadas <strong className="text-primary">{jurisprudences.length} jurisprudências</strong> relevantes 
                          sobre o tema pesquisado. A jurisprudência dominante dos tribunais superiores estabelece critérios 
                          consolidados para casos dessa natureza, com entendimento uniforme sobre a matéria.
                        </>
                      )}
                    </p>
                  </div>

                  {jurisprudences.filter(j => j.isHighlighted).length > 0 && (
                    <>
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-primary">Análise Consolidada:</h4>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          A combinação destes precedentes estabelece uma base jurídica sólida para o caso. 
                          O STJ fornece o fundamento principal sobre responsabilidade civil, enquanto o TJSP 
                          complementa com critérios práticos de quantificação, criando um arcabouço jurisprudencial 
                          robusto e aplicável.
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-primary">Pontos-chave:</h4>
                        <ul className="space-y-2 text-sm text-foreground/80">
                          <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>Responsabilidade civil objetiva fundamentada em precedente do STJ</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>Critérios de quantificação definidos pelo TJSP</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>Nexo causal como elemento central da responsabilização</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>Reconhecimento consolidado de danos morais em casos análogos</span>
                          </li>
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              </div>
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

      {/* Modal de Resumo do Processo */}
      {!isThemeSearch && (
        <ProcessSummary
          open={showProcessSummary}
          onOpenChange={setShowProcessSummary}
          processNumber={processNumber || "0001234-56.2024.8.26.0100"}
          subject="Responsabilidade Civil - Acidente de Trânsito - Indenização por Danos Morais e Materiais"
          court="TJSP - Tribunal de Justiça de São Paulo"
          date="15/01/2024"
          parties={{
            plaintiff: "João da Silva Santos",
            defendant: "Maria Oliveira Costa"
          }}
          status="Em Andamento"
        />
      )}
    </div>
  );
};

export default Results;
