import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";

const SearchSection = () => {
  const [processNumber, setProcessNumber] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!processNumber.trim()) {
      toast.error("Por favor, insira o número do processo");
      return;
    }
    
    // Simula navegação para resultados
    navigate(`/resultados?processo=${encodeURIComponent(processNumber)}`);
    toast.success("Buscando jurisprudências...");
  };

  return (
    <section className="w-full max-w-3xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Inteligência Artificial Jurídica</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Encontre jurisprudências a partir de um processo judicial
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Digite o número do processo para que o Atlas encontre as jurisprudências aplicáveis
        </p>
      </div>

      <div className="bg-card rounded-xl shadow-medium p-8 border border-border">
        <div className="space-y-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Ex: 0000000-00.0000.0.00.0000"
              value={processNumber}
              onChange={(e) => setProcessNumber(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              className="h-14 pl-12 pr-4 text-lg border-2 focus:border-primary transition-colors"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>

          <Button 
            onClick={handleSearch}
            className="w-full h-14 text-lg font-semibold bg-primary text-primary-foreground hover:bg-gradient-gold hover:text-foreground transition-all shadow-medium"
          >
            <Search className="w-5 h-5 mr-2" />
            Buscar Jurisprudências
          </Button>
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            A IA analisará o processo e destacará as jurisprudências mais relevantes
          </p>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
