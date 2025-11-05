import { Scale } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-20">
          {/* Logo minimalista */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-gold rounded-lg shadow-medium">
                <Scale className="w-6 h-6 text-foreground" />
              </div>
              <span className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                Atlas
              </span>
            </div>
            <span className="text-sm font-semibold text-primary">Jurisprudências</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
