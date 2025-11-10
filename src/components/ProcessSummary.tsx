import { FileText, Calendar, User, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProcessSummaryProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
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

const ProcessSummary = ({ open, onOpenChange, processNumber, subject, court, date, parties, status }: ProcessSummaryProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <FileText className="w-6 h-6 text-primary" />
              Resumo do Processo
            </DialogTitle>
            <Badge variant="secondary" className="text-sm">
              {status}
            </Badge>
          </div>
          <DialogDescription>
            Informações detalhadas sobre o processo judicial
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Número do Processo</p>
              <p className="font-medium text-foreground">{processNumber}</p>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-1">Assunto</p>
              <p className="font-medium text-foreground">{subject}</p>
            </div>

            <div className="flex items-start gap-2">
              <Building2 className="w-4 h-4 text-muted-foreground mt-1" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Tribunal</p>
                <p className="font-medium text-foreground">{court}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground mt-1" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Data de Distribuição</p>
                <p className="font-medium text-foreground">{date}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <User className="w-4 h-4 text-muted-foreground mt-1" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Autor</p>
                <p className="font-medium text-foreground">{parties.plaintiff}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <User className="w-4 h-4 text-muted-foreground mt-1" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Réu</p>
                <p className="font-medium text-foreground">{parties.defendant}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProcessSummary;
