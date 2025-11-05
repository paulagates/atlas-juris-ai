import { useNavigate } from "react-router-dom";
import { History as HistoryIcon, Clock, FileText, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const History = () => {
  const navigate = useNavigate();

  // Dados mockados do histórico
  const historyItems = [
    {
      id: "1",
      processNumber: "0001234-56.2024.8.00.0000",
      date: "15/03/2024",
      time: "14:30",
      resultsCount: 5,
    },
    {
      id: "2",
      processNumber: "0005678-90.2024.8.00.0000",
      date: "14/03/2024",
      time: "10:15",
      resultsCount: 3,
    },
    {
      id: "3",
      processNumber: "0009876-54.2024.8.00.0000",
      date: "13/03/2024",
      time: "16:45",
      resultsCount: 7,
    },
  ];

  const handleReopen = (processNumber: string) => {
    navigate(`/resultados?processo=${encodeURIComponent(processNumber)}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Cabeçalho */}
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg">
                <HistoryIcon className="w-6 h-6 text-accent" />
              </div>
              <h1 className="text-3xl font-bold text-primary">Histórico de Processos</h1>
            </div>
            <p className="text-muted-foreground">
              Acesse suas consultas anteriores de jurisprudências
            </p>
          </div>

          {/* Lista de Histórico */}
          <div className="space-y-4">
            {historyItems.map((item) => (
              <Card 
                key={item.id}
                className="group hover:shadow-medium transition-all duration-300 animate-fade-in"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                      <CardTitle className="text-lg text-primary flex items-center gap-2">
                        <div className="flex items-center justify-center w-8 h-8 bg-gradient-gold rounded-lg">
                          <FileText className="w-4 h-4 text-foreground" />
                        </div>
                        {item.processNumber}
                      </CardTitle>
                      <CardDescription className="mt-2 flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {item.date} às {item.time}
                        </span>
                        <span className="text-accent font-medium">
                          {item.resultsCount} jurisprudências encontradas
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <Button
                    onClick={() => handleReopen(item.processNumber)}
                    variant="outline"
                    className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                  >
                    Reabrir consulta
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Estado vazio (quando não há histórico) */}
          {historyItems.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
                  <HistoryIcon className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Nenhuma consulta realizada
                </h3>
                <p className="text-muted-foreground mb-6">
                  Suas consultas anteriores aparecerão aqui
                </p>
                <Button onClick={() => navigate("/")}>
                  Fazer primeira consulta
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default History;
