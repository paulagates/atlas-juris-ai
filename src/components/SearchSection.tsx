import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { toast } from "sonner";

const SearchSection = () => {
  const [theme, setTheme] = useState("");
  const [keywords, setKeywords] = useState("");
  const [processNumber, setProcessNumber] = useState("");
  const navigate = useNavigate();

  const handleThemeSearch = () => {
    if (!theme.trim() && !keywords.trim()) {
      toast.error("Por favor, preencha pelo menos o tema ou palavras-chave");
      return;
    }
    
    navigate(`/resultados?tema=${encodeURIComponent(theme)}&palavras=${encodeURIComponent(keywords)}`);
    toast.success("Buscando jurisprudências...");
  };

  const handleProcessSearch = () => {
    if (!processNumber.trim()) {
      toast.error("Por favor, insira o número do processo");
      return;
    }
    
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
          Atlas Jurisprudências
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Busque jurisprudências por número de processo, tema ou palavras-chave
        </p>
      </div>

      <div className="bg-card rounded-xl shadow-medium p-8 border border-border">
        <Tabs defaultValue="process" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="process">Número do Processo</TabsTrigger>
            <TabsTrigger value="theme">Tema/Palavras-chave</TabsTrigger>
          </TabsList>

          <TabsContent value="process" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="process-number">Número do Processo</Label>
              <div className="relative">
                <Input
                  id="process-number"
                  type="text"
                  placeholder="Ex: 0000000-00.0000.0.00.0000"
                  value={processNumber}
                  onChange={(e) => setProcessNumber(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleProcessSearch()}
                  className="h-14 pl-12 pr-4 text-lg border-2 focus:border-primary transition-colors"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
            </div>

            <Button 
              onClick={handleProcessSearch}
              className="w-full h-14 text-lg font-semibold bg-gradient-primary hover:opacity-90 transition-opacity shadow-medium"
            >
              <Search className="w-5 h-5 mr-2" />
              Buscar por Processo
            </Button>
          </TabsContent>

          <TabsContent value="theme" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="theme">Tema ou Caso</Label>
              <Textarea
                id="theme"
                placeholder="Ex: Direito à moradia em área de risco ambiental"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="min-h-[100px] border-2 focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="keywords">Palavras-chave</Label>
              <Input
                id="keywords"
                type="text"
                placeholder="Ex: moradia, meio ambiente, área de risco"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="h-12 border-2 focus:border-primary transition-colors"
              />
            </div>

            <Button 
              onClick={handleThemeSearch}
              className="w-full h-14 text-lg font-semibold bg-gradient-primary hover:opacity-90 transition-opacity shadow-medium"
            >
              <Search className="w-5 h-5 mr-2" />
              Buscar Jurisprudências
            </Button>
          </TabsContent>
        </Tabs>

        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            A IA analisará sua busca e destacará as jurisprudências mais relevantes
          </p>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
