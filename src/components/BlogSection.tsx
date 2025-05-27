
import React from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const BlogSection = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      title: "Las nuevas funcionalidades de Odoo 17 que están revolucionando la gestión empresarial",
      excerpt: "Descubre las últimas características que han convertido a Odoo 17 en la versión más potente hasta la fecha.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      date: "2024-01-15",
      author: "Equipo BDR",
      category: "Odoo",
      tags: ["ERP", "Gestión", "Automatización"]
    },
    {
      id: 2,
      title: "Cómo la digitalización está transformando las estaciones de esquí",
      excerpt: "Un análisis profundo sobre las tecnologías que están redefiniendo la experiencia en las pistas.",
      image: "https://images.unsplash.com/photo-1551524164-6cf64ac2c44d?w=800&h=400&fit=crop",
      date: "2024-01-10",
      author: "Carlos Martínez",
      category: "Ski Solutions",
      tags: ["Digitalización", "Esquí", "Tecnología"]
    },
    {
      id: 3,
      title: "Tendencias en ciberseguridad para 2024: Lo que las empresas deben saber",
      excerpt: "Con TutumSec, exploramos las amenazas emergentes y las mejores prácticas de protección.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
      date: "2024-01-05",
      author: "Ana García",
      category: "Ciberseguridad",
      tags: ["Seguridad", "TutumSec", "Protección"]
    },
    {
      id: 4,
      title: "Marketing digital en la era del Cloud: Estrategias que funcionan",
      excerpt: "Nevola nos comparte las claves para maximizar el ROI en campañas digitales modernas.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=400&fit=crop",
      date: "2023-12-28",
      author: "Laura Fernández",
      category: "Marketing",
      tags: ["Marketing Digital", "Cloud", "ROI"]
    },
    {
      id: 5,
      title: "25 años de innovación: El camino de BDR Group hacia el futuro",
      excerpt: "Reflexionamos sobre nuestro recorrido y compartimos nuestra visión para los próximos años.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop",
      date: "2023-12-20",
      author: "Dirección BDR",
      category: "Empresa",
      tags: ["Aniversario", "Historia", "Futuro"]
    },
    {
      id: 6,
      title: "Integración de sistemas: Cómo conectar todas las piezas de tu empresa",
      excerpt: "Guía completa sobre la importancia de tener sistemas interconectados y cómo lograrlo.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      date: "2023-12-15",
      author: "Miguel Torres",
      category: "Sistemas",
      tags: ["Integración", "Sistemas", "ERP"]
    }
  ];

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Odoo': 'bg-purple-100 text-purple-800',
      'Ski Solutions': 'bg-blue-100 text-blue-800',
      'Ciberseguridad': 'bg-red-100 text-red-800',
      'Marketing': 'bg-green-100 text-green-800',
      'Empresa': 'bg-orange-100 text-orange-800',
      'Sistemas': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#091633] to-[#7e57c5] bg-clip-text text-transparent mb-4">
            <span className="text-sm font-semibold uppercase tracking-wider">Blog & Noticias</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#091633] to-[#7e57c5] bg-clip-text text-transparent">
            Últimas Noticias y Tendencias
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mantente al día con las últimas novedades tecnológicas, consejos de expertos y noticias de la industria.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredPost.category)}`}>
                    {featuredPost.category}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formatDate(featuredPost.date)}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-[#7e57c5] transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <Button variant="outline" className="group-hover:bg-[#7e57c5] group-hover:text-white transition-colors">
                    Leer más
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.date)}
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-[#7e57c5] transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                  <Button variant="ghost" size="sm" className="text-[#7e57c5] hover:bg-[#7e57c5] hover:text-white">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-[#091633] to-[#7e57c5] hover:opacity-90 transition-opacity">
            Cargar más artículos
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
