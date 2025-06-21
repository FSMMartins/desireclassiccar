import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-50/50 py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-gray-900 tracking-tight mb-4">
            Entre em Contacto
          </h2>
          <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
            Transformamos clássicos em obras de arte. Fale connosco sobre o seu próximo projeto de restauração.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Informações de Contacto</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 font-medium">Telefone</p>
                  <p className="text-gray-900">+351 123 456 789</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email</p>
                  <p className="text-gray-900">info@desireclassiccar.pt</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Morada</p>
                  <p className="text-gray-900">Rua dos Clássicos, 123<br />1000-000 Lisboa, Portugal</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Envie uma Mensagem</h3>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all"
                />
              </div>
              <div>
                <textarea
                  placeholder="Mensagem"
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-2xl font-medium shadow-lg transition-all duration-200"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;