import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface TribunalSelectorProps {
  onConfirm: (selected: string[]) => void;
}

const TribunalSelector = ({ onConfirm }: TribunalSelectorProps) => {
  const tribunals = [
    { id: "stf", name: "STF" },
    { id: "stj", name: "STJ" },
    { id: "stm", name: "STM" },
    { id: "tst", name: "TST" },
    { id: "tse", name: "TSE" },
    { id: "tjs", name: "TJs" },
    { id: "trts", name: "TRTs" },
    { id: "trfs", name: "TRFs" },
  ];

  const [selected, setSelected] = useState<string[]>(["stj", "tjs"]);

  const toggleTribunal = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-foreground font-medium mb-3">
        De quais tribunais você deseja buscar jurisprudências?
      </p>
      
      <div className="grid grid-cols-4 gap-2">
        {tribunals.map((tribunal) => {
          const isSelected = selected.includes(tribunal.id);
          return (
            <Button
              key={tribunal.id}
              variant={isSelected ? "default" : "outline"}
              size="sm"
              onClick={() => toggleTribunal(tribunal.id)}
              className={`relative ${
                isSelected
                  ? "bg-primary text-primary-foreground"
                  : "hover:border-primary hover:text-primary"
              }`}
            >
              {isSelected && (
                <Check className="w-3 h-3 mr-1" />
              )}
              {tribunal.name}
            </Button>
          );
        })}
      </div>

      <Button
        onClick={() => onConfirm(selected)}
        className="w-full bg-gradient-gold hover:opacity-90 text-foreground font-semibold mt-4"
      >
        Confirmar seleção
      </Button>
    </div>
  );
};

export default TribunalSelector;
