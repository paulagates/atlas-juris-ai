import { FileText, Calendar, User, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProcessSummaryProps {
  processNumber: string;
  subject: string;
  court: string;
  date: string;
  parties: {
    plaintiff: string;
    defendant: string;
  };
  status: string;
}

const ProcessSummary = ({ processNumber, subject, court, date, parties, status }: ProcessSummaryProps) => {
  return (
    <Card className="p-6 mb-6 animate-fade-in">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold text-primary">Resumo do Processo</h2>
        </div>
        <Badge variant="secondary" className="text-sm">
          {status}
        </Badge>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Número do Processo</p>
            <p className="font-medium text-foreground">{processNumber}</p>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground mb-1">Assunto</p>
            <p className="font-medium text-foreground">{subject}</p>
          </div>

          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Tribunal</p>
              <p className="font-medium text-foreground">{court}</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Data de Distribuição</p>
              <p className="font-medium text-foreground">{date}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Autor</p>
              <p className="font-medium text-foreground">{parties.plaintiff}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Réu</p>
              <p className="font-medium text-foreground">{parties.defendant}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProcessSummary;
