import { Scale, Calendar, Building2, Sparkles, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface JurisprudenceCardProps {
  title: string;
  tribunal: string;
  date: string;
  excerpt: string;
  relevanceReason?: string;
  isHighlighted?: boolean;
  showRelevanceReason?: boolean;
  onViewDetails: () => void;
}

const JurisprudenceCard = ({
  title,
  tribunal,
  date,
  excerpt,
  relevanceReason,
  isHighlighted = false,
  showRelevanceReason = true,
  onViewDetails,
}: JurisprudenceCardProps) => {
  const [isReasonExpanded, setIsReasonExpanded] = useState(false);

  return (
    <Card 
      className={`group hover:shadow-medium transition-all duration-300 animate-fade-in ${
        isHighlighted 
          ? "border-2 border-accent shadow-highlight bg-accent/5" 
          : "border-border"
      }`}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {isHighlighted && (
              <Badge className="mb-2 bg-accent text-accent-foreground border-accent/20">
                <Sparkles className="w-3 h-3 mr-1" />
                Mais Relevante (IA)
              </Badge>
            )}
            <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">
              {title}
            </CardTitle>
          </div>
          <Scale className={`w-6 h-6 ${isHighlighted ? "text-accent" : "text-muted-foreground"}`} />
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Building2 className="w-4 h-4" />
            <span>{tribunal}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        </div>

        <CardDescription className="text-sm leading-relaxed line-clamp-3">
          {excerpt}
        </CardDescription>

        {relevanceReason && showRelevanceReason && (
          <div className="bg-accent/10 border border-accent/20 rounded-lg overflow-hidden">
            <button
              onClick={() => setIsReasonExpanded(!isReasonExpanded)}
              className="w-full flex items-center justify-between p-3 hover:bg-accent/5 transition-colors"
            >
              <p className="text-xs font-semibold text-accent">
                Fundamentação da Relevância
              </p>
              <ChevronDown
                className={`w-4 h-4 text-accent transition-transform ${
                  isReasonExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
            {isReasonExpanded && (
              <div className="px-3 pb-3 animate-fade-in">
                <p className="text-xs text-foreground/80 leading-relaxed">
                  {relevanceReason}
                </p>
              </div>
            )}
          </div>
        )}

        <Button 
          variant="outline" 
          onClick={onViewDetails}
          className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
        >
          Ver mais detalhes
          <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default JurisprudenceCard;
