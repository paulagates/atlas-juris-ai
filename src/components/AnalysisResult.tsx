import { FileText, Scale, CheckCircle2, AlertCircle, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

interface AnalysisResultProps {
  analysis: {
    summary: string;
    strengths: string[];
    weaknesses: string[];
    recommendations: string[];
    conclusion: string;
  };
}

const AnalysisResult = ({ analysis }: AnalysisResultProps) => {
  return (
    <Card className="border-2 border-accent/20 shadow-lg animate-fade-in">
      <CardHeader className="bg-gradient-primary/10">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-accent rounded-lg">
            <Scale className="w-6 h-6 text-accent-foreground" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-2xl text-primary">
              Análise Completa do Caso
            </CardTitle>
            <CardDescription className="text-sm mt-1">
              Análise consolidada de todas as jurisprudências encontradas
            </CardDescription>
          </div>
          <Badge className="bg-accent text-accent-foreground">
            IA Jurídica
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 pt-6">
        {/* Resumo Executivo */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-primary">Resumo Executivo</h3>
          </div>
          <p className="text-foreground/90 leading-relaxed whitespace-pre-line">
            {analysis.summary}
          </p>
        </div>

        <Separator />

        {/* Pontos Fortes */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <h3 className="text-lg font-semibold text-primary">Pontos Fortes da Tese</h3>
          </div>
          <ul className="space-y-2">
            {analysis.strengths.map((strength, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                <p className="text-foreground/80 leading-relaxed">{strength}</p>
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        {/* Pontos de Atenção */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="w-5 h-5 text-amber-600" />
            <h3 className="text-lg font-semibold text-primary">Pontos de Atenção</h3>
          </div>
          <ul className="space-y-2">
            {analysis.weaknesses.map((weakness, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
                <p className="text-foreground/80 leading-relaxed">{weakness}</p>
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        {/* Recomendações Estratégicas */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-5 h-5 text-accent" />
            <h3 className="text-lg font-semibold text-primary">Recomendações Estratégicas</h3>
          </div>
          <ul className="space-y-2">
            {analysis.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-foreground/80 leading-relaxed">{rec}</p>
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        {/* Conclusão */}
        <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
          <h3 className="text-lg font-semibold text-primary mb-2">Conclusão</h3>
          <p className="text-foreground/90 leading-relaxed">
            {analysis.conclusion}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalysisResult;
