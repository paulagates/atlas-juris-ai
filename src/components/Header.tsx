import { Link, useLocation } from "react-router-dom";
import { Scale, Search, History, HelpCircle } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="bg-card border-b border-border shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-accent rounded-lg shadow-medium transition-transform group-hover:scale-105">
              <Scale className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-accent">Atlas</span>
              <span className="text-sm font-medium text-primary">Jurisprudências</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Link to="/">
              <Button 
                variant={isActive("/") ? "default" : "ghost"}
                className="gap-2"
              >
                <Search className="w-4 h-4" />
                Buscar
              </Button>
            </Link>
            <Link to="/historico">
              <Button 
                variant={isActive("/historico") ? "default" : "ghost"}
                className="gap-2"
              >
                <History className="w-4 h-4" />
                Histórico
              </Button>
            </Link>
            <Link to="/ajuda">
              <Button 
                variant={isActive("/ajuda") ? "default" : "ghost"}
                className="gap-2"
              >
                <HelpCircle className="w-4 h-4" />
                Ajuda
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
