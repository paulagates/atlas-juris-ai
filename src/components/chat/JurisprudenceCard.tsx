import { Scale, Calendar, Building2, Sparkles, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface JurisprudenceCardProps {
  title: string;
  tribunal: string;
  date: string;
  excerpt: string;
  isHighlighted?: boolean;
  onViewDetails?: () => void;
}

const JurisprudenceCard = ({
  title,
  tribunal,
  date,
  excerpt,
  isHighlighted = false,
  onViewDetails,
}: JurisprudenceCardProps) => {
  return (
    <Card 
      className={`mb-3 hover:shadow-medium transition-all duration-300 ${
        isHighlighted 
          ? "border-2 bg-gradient-gold/10 shadow-highlight relative before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-gold before:-z-10" 
          : "border-border bg-card"
      }`}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {isHighlighted && (
              <Badge className="mb-2 bg-gradient-gold text-foreground border-none font-semibold">
                <Sparkles className="w-3 h-3 mr-1" />
                Mais Relevante
              </Badge>
            )}
            <CardTitle className="text-base text-primary font-semibold">
              {title}
            </CardTitle>
          </div>
          <Scale className={`w-5 h-5 ${isHighlighted ? "text-primary" : "text-muted-foreground"}`} />
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Building2 className="w-3 h-3" />
            <span>{tribunal}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{date}</span>
          </div>
        </div>

        <CardDescription className="text-xs leading-relaxed line-clamp-3">
          {excerpt}
        </CardDescription>

        {onViewDetails && (
          <Button 
            variant="outline" 
            size="sm"
            onClick={onViewDetails}
            className="w-full text-xs hover:border-primary hover:text-primary transition-colors"
          >
            Ver mais detalhes
            <ChevronRight className="w-3 h-3 ml-2" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default JurisprudenceCard;
