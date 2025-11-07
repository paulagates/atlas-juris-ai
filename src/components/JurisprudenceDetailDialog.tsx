import { Scale, Calendar, Building2, FileText, X, Gavel } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

interface JurisprudenceDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  jurisprudence: {
    id: string;
    title: string;
    tribunal: string;
    date: string;
    excerpt: string;
    fullText: string;
    processNumber: string;
    relator: string;
    tags: string[];
  } | null;
}

const JurisprudenceDetailDialog = ({
  open,
  onOpenChange,
  jurisprudence,
}: JurisprudenceDetailDialogProps) => {
  if (!jurisprudence) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <DialogTitle className="text-2xl text-primary mb-3">
                {jurisprudence.title}
              </DialogTitle>
              <div className="flex flex-wrap gap-2 mb-3">
                {jurisprudence.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <Scale className="w-8 h-8 text-accent flex-shrink-0" />
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Informações do Processo */}
          <div className="bg-muted/50 rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <Building2 className="w-4 h-4 text-muted-foreground" />
              <span className="font-semibold">Tribunal:</span>
              <span className="text-muted-foreground">{jurisprudence.tribunal}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="font-semibold">Data de Julgamento:</span>
              <span className="text-muted-foreground">{jurisprudence.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FileText className="w-4 h-4 text-muted-foreground" />
              <span className="font-semibold">Número do Processo:</span>
              <span className="text-muted-foreground">{jurisprudence.processNumber}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Gavel className="w-4 h-4 text-muted-foreground" />
              <span className="font-semibold">Relator:</span>
              <span className="text-muted-foreground">{jurisprudence.relator}</span>
            </div>
          </div>

          <Separator />

          {/* Ementa */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">Ementa</h3>
            <DialogDescription className="text-foreground/90 leading-relaxed whitespace-pre-line">
              {jurisprudence.excerpt}
            </DialogDescription>
          </div>

          <Separator />

          {/* Texto Completo */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">Acórdão</h3>
            <DialogDescription className="text-foreground/80 leading-relaxed text-sm whitespace-pre-line">
              {jurisprudence.fullText}
            </DialogDescription>
          </div>

          {/* Ações */}
          <div className="flex gap-3 pt-4">
            <Button variant="default" className="flex-1">
              <FileText className="w-4 h-4 mr-2" />
              Baixar PDF Completo
            </Button>
            <Button variant="outline" className="flex-1">
              <Scale className="w-4 h-4 mr-2" />
              Usar em Análise
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JurisprudenceDetailDialog;
