import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatMessage from "@/components/chat/ChatMessage";
import JurisprudenceCard from "@/components/chat/JurisprudenceCard";
import TribunalSelector from "@/components/chat/TribunalSelector";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  role: "user" | "assistant";
  content?: string;
  type?: "text" | "jurisprudences" | "tribunal-selector";
  data?: any;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Olá! Sou o Atlas Jurisprudências. Digite o número do processo para que eu possa buscar as jurisprudências aplicáveis.",
      type: "text",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      type: "text",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simula resposta da IA
    setTimeout(() => {
      handleAIResponse(inputValue);
      setIsTyping(false);
    }, 1500);
  };

  const handleAIResponse = (userInput: string) => {
    // Se parece um número de processo, mostra seletor de tribunais primeiro
    const processNumberPattern = /\d{7}-\d{2}\.\d{4}\.\d\.\d{2}\.\d{4}/;
    
    if (processNumberPattern.test(userInput) && messages.length <= 2) {
      // Primeiro mostra seletor de tribunais
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          type: "tribunal-selector",
        },
      ]);
    } else if (messages.some((m) => m.type === "tribunal-selector") && !messages.some((m) => m.type === "jurisprudences")) {
      // Depois do seletor, mostra jurisprudências
      showJurisprudences();
    } else {
      // Resposta genérica
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content: "Posso ajudá-lo a entender melhor as jurisprudências encontradas, comparar decisões ou explicar fundamentos jurídicos. Como posso ajudar?",
          type: "text",
        },
      ]);
    }
  };

  const handleTribunalSelection = (selected: string[]) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        role: "user",
        content: `Tribunais selecionados: ${selected.join(", ").toUpperCase()}`,
        type: "text",
      },
    ]);

    setIsTyping(true);
    setTimeout(() => {
      showJurisprudences();
      setIsTyping(false);
    }, 1500);
  };

  const showJurisprudences = () => {
    const jurisprudences = [
      {
        id: "1",
        title: "Recurso Especial - Direito Civil - Responsabilidade Civil",
        tribunal: "STJ - Superior Tribunal de Justiça",
        date: "15/03/2024",
        excerpt:
          "A responsabilidade civil por danos morais e materiais decorrentes de acidente de trânsito é objetiva quando comprovado o nexo causal entre a conduta e o dano. Precedentes jurisprudenciais consolidados neste sentido.",
        isHighlighted: true,
      },
      {
        id: "2",
        title: "Agravo de Instrumento - Processo Civil",
        tribunal: "TJSP - Tribunal de Justiça de São Paulo",
        date: "10/03/2024",
        excerpt:
          "O deferimento de liminar em tutela de urgência requer a demonstração inequívoca dos requisitos de probabilidade do direito e perigo de dano ou risco ao resultado útil do processo.",
        isHighlighted: false,
      },
      {
        id: "3",
        title: "Apelação Cível - Contratos",
        tribunal: "TJRJ - Tribunal de Justiça do Rio de Janeiro",
        date: "05/03/2024",
        excerpt:
          "A revisão contratual por onerosidade excessiva é cabível quando demonstrada alteração substancial das circunstâncias que fundamentaram a celebração do negócio jurídico.",
        isHighlighted: false,
      },
    ];

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        role: "assistant",
        content: "Aqui estão as jurisprudências relacionadas ao processo informado:",
        type: "text",
      },
      {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        type: "jurisprudences",
        data: jurisprudences,
      },
      {
        id: (Date.now() + 2).toString(),
        role: "assistant",
        content:
          "Destaquei a jurisprudência mais relevante para o seu caso. Deseja que eu explique os fundamentos desta decisão ou compare com outras jurisprudências?",
        type: "text",
      },
    ]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <main className="flex-1 flex flex-col overflow-hidden">
        <ScrollArea className="flex-1 px-4" ref={scrollRef}>
          <div className="container max-w-4xl mx-auto py-8">
            {messages.map((message) => (
              <div key={message.id}>
                {message.type === "text" && (
                  <ChatMessage role={message.role} content={message.content} />
                )}

                {message.type === "jurisprudences" && (
                  <ChatMessage role="assistant">
                    <div className="space-y-3">
                      {message.data?.map((jurisprudence: any) => (
                        <JurisprudenceCard
                          key={jurisprudence.id}
                          {...jurisprudence}
                          onViewDetails={() => console.log("Ver detalhes:", jurisprudence.id)}
                        />
                      ))}
                    </div>
                  </ChatMessage>
                )}

                {message.type === "tribunal-selector" && (
                  <ChatMessage role="assistant">
                    <TribunalSelector onConfirm={handleTribunalSelection} />
                  </ChatMessage>
                )}
              </div>
            ))}

            {isTyping && (
              <ChatMessage role="assistant">
                <div className="flex gap-1 py-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-100" />
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-200" />
                </div>
              </ChatMessage>
            )}
          </div>
        </ScrollArea>

        {/* Campo de entrada fixo */}
        <div className="border-t border-border bg-background">
          <div className="container max-w-4xl mx-auto px-4 py-4">
            <div className="flex gap-2">
              <Input
                placeholder="Digite o número do processo ou faça uma pergunta…"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 h-12 text-base border-2 focus:border-primary"
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="h-12 w-12 bg-primary hover:bg-primary/90 shrink-0"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
