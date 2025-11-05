import { Link } from "react-router-dom";
import { Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo e instituição */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-gold rounded-lg">
              <Scale className="w-6 h-6 text-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg">Atlas Jurisprudências</span>
              <span className="text-sm text-primary-foreground/80">Tribunal de Justiça</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link to="/politica" className="hover:bg-gradient-gold hover:bg-clip-text hover:text-transparent transition-all">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="hover:bg-gradient-gold hover:bg-clip-text hover:text-transparent transition-all">
              Termos de Uso
            </Link>
            <Link to="/suporte" className="hover:bg-gradient-gold hover:bg-clip-text hover:text-transparent transition-all">
              Suporte
            </Link>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/80">
          <p>© {new Date().getFullYear()} Tribunal de Justiça. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
