import React from 'react';

const MapSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            Localização
          </h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto">
            Visite-nos no nosso atelier em Montelavar
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.0!2d-9.2!3d38.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sR.%20Maestro%20Alferes%20%C3%81lvaro%20Augusto%20de%20Sousa%2038%2C%202715-666%20Montelavar!5e0!3m2!1spt!2spt!4v1620000000000!5m2!1spt!2spt"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Desire Classic Car"
            />
          </div>
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Endereço
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  R. Maestro Alferes Álvaro Augusto de Sousa 38<br />
                  2715-666 Montelavar<br />
                  Portugal
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Horário
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Segunda a Sexta: 9:00 - 18:00<br />
                  Sábado: 9:00 - 13:00<br />
                  Domingo: Fechado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;