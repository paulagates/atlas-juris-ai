import { Bot, User } from "lucide-react";
import { ReactNode } from "react";

interface ChatMessageProps {
  role: "user" | "assistant";
  content?: string;
  children?: ReactNode;
}

const ChatMessage = ({ role, content, children }: ChatMessageProps) => {
  return (
    <div className={`flex gap-3 mb-6 animate-fade-in ${role === "user" ? "justify-end" : "justify-start"}`}>
      {role === "assistant" && (
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Bot className="w-5 h-5 text-primary" />
        </div>
      )}
      
      <div className={`max-w-[85%] ${role === "user" ? "order-first" : ""}`}>
        <div
          className={`rounded-2xl px-6 py-4 ${
            role === "user"
              ? "bg-gradient-gold text-foreground font-medium"
              : "bg-primary/5 text-foreground border border-primary/10"
          }`}
        >
          {content && <p className="text-sm leading-relaxed whitespace-pre-wrap">{content}</p>}
          {children}
        </div>
      </div>
      
      {role === "user" && (
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
          <User className="w-5 h-5 text-foreground" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
