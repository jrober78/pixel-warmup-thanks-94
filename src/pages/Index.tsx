
import { useEffect } from 'react';
import { CheckCircle, Play, ArrowRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  useEffect(() => {
    // Disparar evento de conversão quando a página carregar
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'CompleteRegistration', {
        content_name: 'Thank You Page Visit',
        status: 'completed'
      });
    }
  }, []);

  const handleCTAClick = () => {
    // Rastrear clique no CTA
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'CTA Click - Start Watching'
      });
    }
    // Aqui você pode redirecionar para a página desejada
    console.log('Redirecionando para a página principal...');
  };

  const handleBackToHome = () => {
    // Rastrear clique no botão secundário
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: 'Back to Home Click'
      });
    }
    console.log('Voltando para a página inicial...');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Success Icon */}
          <div className="mb-8">
            <CheckCircle className="w-16 h-16 md:w-24 md:h-24 text-yellow-400 mx-auto animate-scale-in" />
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-6 animate-fade-in">
            Sua compra foi confirmada!
          </h1>

          {/* Subheading */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8 animate-fade-in">
            Obrigado pelo seu pagamento!
          </h2>

          {/* Main Text */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed animate-fade-in">
            Agora você está pronto para aproveitar todo o conteúdo que oferecemos! 
            <br className="hidden md:block" />
            Fique à vontade para explorar e descobrir tudo que preparamos para você.
          </p>

          {/* Streaming Section */}
          <div className="mb-12 animate-fade-in">
            <div className="bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-yellow-400 font-semibold text-lg">
                    AO VIVO
                  </span>
                </div>
              </div>
              
              {/* Video Placeholder */}
              <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
                <Play className="w-16 h-16 text-yellow-400 opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/70 rounded-lg p-3">
                    <p className="text-yellow-400 font-semibold text-sm">
                      🎬 Aguardando próximo conteúdo...
                    </p>
                    <p className="text-gray-300 text-xs mt-1">
                      Algo incrível está chegando!
                    </p>
                  </div>
                </div>
              </div>

              {/* Live Stats */}
              <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>1.2K assistindo</span>
                </div>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <span>Transmissão exclusiva</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              onClick={handleCTAClick}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-400/25"
            >
              Comece a assistir agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              onClick={handleBackToHome}
              variant="outline" 
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              Voltar para a página inicial
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-gray-900/50 rounded-xl border border-gray-800 animate-fade-in">
            <p className="text-gray-400 text-sm">
              ✅ Pagamento processado com segurança
              <br />
              📧 Você receberá um e-mail de confirmação em breve
              <br />
              🎯 Acesso liberado imediatamente
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-gray-800">
        <div className="text-center text-gray-500 text-sm">
          <p>© 2024 - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

// Declaração de tipos para o Meta Pixel
declare global {
  interface Window {
    fbq: any;
  }
}

export default Index;
