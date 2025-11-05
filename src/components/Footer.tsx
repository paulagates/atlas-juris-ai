import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-primary-foreground/70">
          <Link to="/politica" className="hover:text-primary-foreground transition-colors">
            Política de Privacidade
          </Link>
          <span className="hidden md:inline">•</span>
          <Link to="/termos" className="hover:text-primary-foreground transition-colors">
            Termos de Uso
          </Link>
          <span className="hidden md:inline">•</span>
          <Link to="/suporte" className="hover:text-primary-foreground transition-colors">
            Suporte
          </Link>
        </div>
        <div className="text-center text-xs text-primary-foreground/60 mt-2">
          © {new Date().getFullYear()} Tribunal de Justiça. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
