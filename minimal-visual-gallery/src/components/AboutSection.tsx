import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gray-50/30 border-t border-gray-200/50">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        <div className="text-center mb-12">
          <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Especializamo-nos na restauração completa de automóveis clássicos, 
              combinando técnicas tradicionais com tecnologia moderna para devolver 
              a vida a cada veículo histórico.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Com mais de 15 anos de experiência, a nossa equipa de artesãos 
              dedicados trabalha meticulosamente em cada detalhe, desde a 
              carroçaria até ao motor, garantindo que cada restauração mantém 
              a autenticidade original.
            </p>
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-light text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Anos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200/50">
            <h3 className="text-xl font-medium text-gray-900 mb-6">
              Os Nossos Serviços
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                <span className="text-gray-700">Restauração Completa</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                <span className="text-gray-700">Reparação de Motor</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                <span className="text-gray-700">Pintura e Carroçaria</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                <span className="text-gray-700">Interiores</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                <span className="text-gray-700">Consultoria Técnica</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;