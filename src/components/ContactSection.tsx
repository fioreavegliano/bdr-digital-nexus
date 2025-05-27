
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const contactData = {
      nombre: formData.get('nombre') as string,
      empresa: formData.get('empresa') as string || null,
      email: formData.get('email') as string,
      mensaje: formData.get('mensaje') as string,
    };

    try {
      const { error } = await supabase
        .from('contacto_bdrgroup')
        .insert([contactData]);

      if (error) {
        console.error('Error inserting contact form:', error);
        toast({
          title: "Error",
          description: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Formulario enviado",
          description: "Nos pondremos en contacto contigo lo antes posible.",
        });
        // Reset form
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-16 bg-gradient-to-br from-[#091633] to-[#1a2851]">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Contáctanos</h2>
              <p className="text-gray-600 mb-6">
                Cuéntanos sobre tu proyecto o consulta y te responderemos a la mayor brevedad posible
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#7e57c5]/10 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#7e57c5" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <span className="text-gray-700">info@bdrinformatica.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#7e57c5]/10 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#7e57c5" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">+34 900 123 456</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#7e57c5]/10 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#7e57c5" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Barcelona, España</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre</Label>
                    <Input id="nombre" name="nombre" placeholder="Tu nombre" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input id="empresa" name="empresa" placeholder="Nombre de la empresa" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input id="email" name="email" type="email" placeholder="tu@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea id="mensaje" name="mensaje" placeholder="¿En qué podemos ayudarte?" className="min-h-[120px]" required />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#7e57c5] to-[#e81f76] hover:from-[#6a49a6] hover:to-[#d41967]"
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
