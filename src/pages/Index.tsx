import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchSection from "@/components/SearchSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <SearchSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
