
import React from 'react';
import { Calendar, Users, Target, Star, Lightbulb, Shield, Heart, Rocket, Building, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  const milestones = [
    {
      year: "1998",
      title: "El Comienzo",
      description: "Fundados en Barcelona con enfoque en soluciones tecnológicas para esquí",
      icon: <Rocket className="h-5 w-5" />,
      color: "from-blue-400 to-purple-600"
    },
    {
      year: "2007",
      title: "Alianzas Clave",
      description: "Líderes nacionales en control de acceso para estaciones de esquí",
      icon: <Target className="h-5 w-5" />,
      color: "from-purple-400 to-pink-600"
    },
    {
      year: "2012",
      title: "Innovación Propia",
      description: "Desarrollamos APIs e interfaces que cubren 100% de necesidades",
      icon: <Lightbulb className="h-5 w-5" />,
      color: "from-pink-400 to-red-600"
    },
    {
      year: "2023",
      title: "25º Aniversario",
      description: "Presentes en 70% de estaciones ibéricas y agentes oficiales Odoo",
      icon: <Award className="h-5 w-5" />,
      color: "from-red-400 to-orange-600"
    }
  ];

  const coreValues = [
    {
      title: "Excelencia",
      description: "Superamos expectativas con productos y servicios de calidad premium",
      icon: <Star className="h-6 w-6" />,
      color: "bg-gradient-to-r from-yellow-400 to-orange-500"
    },
    {
      title: "Innovación",
      description: "Buscamos continuamente nuevas tecnologías y ventajas competitivas",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "bg-gradient-to-r from-purple-400 to-pink-500"
    },
    {
      title: "Confianza",
      description: "Actuamos con transparencia, ética y respeto en cada interacción",
      icon: <Shield className="h-6 w-6" />,
      color: "bg-gradient-to-r from-green-400 to-blue-500"
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#091633] to-[#7e57c5] bg-clip-text text-transparent mb-4">
            <Building className="h-8 w-8 text-[#7e57c5]" />
            <span className="text-sm font-semibold uppercase tracking-wider">Sobre BDR Group</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#091633] to-[#7e57c5] bg-clip-text text-transparent">
            25 años transformando empresas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desde 1998, somos el socio tecnológico de confianza que impulsa la eficiencia y competitividad de nuestros clientes en el mundo digital.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">Hitos que nos definen</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={milestone.year} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${milestone.color}`}></div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-full bg-gradient-to-r ${milestone.color} text-white`}>
                      {milestone.icon}
                    </div>
                    <span className="text-2xl font-bold text-gray-300">{milestone.year}</span>
                  </div>
                  <CardTitle className="text-lg">{milestone.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{milestone.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <Card className="bg-gradient-to-br from-[#091633] to-[#304375] text-white border-0 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 mx-auto">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold">Nuestra Misión</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg leading-relaxed text-gray-100 max-w-4xl mx-auto">
                Proporcionamos soluciones tecnológicas integrales que empoderan a las organizaciones mediante la optimización de procesos. Somos el socio confiable que impulsa la eficiencia, productividad y competitividad de nuestros clientes.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Nuestros Valores</h3>
          <p className="text-gray-600 mb-12">Los pilares que nos guían cada día</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={value.title} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${value.color} rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-[#7e57c5] mb-2">25+</div>
            <div className="text-gray-600">Años de experiencia</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-[#7e57c5] mb-2">70%</div>
            <div className="text-gray-600">Estaciones de esquí ibéricas</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-[#7e57c5] mb-2">100%</div>
            <div className="text-gray-600">Soluciones personalizadas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
