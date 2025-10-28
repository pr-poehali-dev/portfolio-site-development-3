import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const skills = [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
  ];

  const technologies = ['all', 'React', 'TypeScript', 'Node.js', 'Python', 'Next.js'];
  const projectTypes = ['all', 'E-commerce', 'SaaS', 'Landing Page', 'Dashboard'];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Полнофункциональная платформа интернет-магазина с корзиной, оплатой и админ-панелью',
      image: '🛍️',
      technologies: ['React', 'TypeScript', 'Node.js'],
      type: 'E-commerce',
      link: '#'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Интерактивная панель аналитики с графиками и отчетами в реальном времени',
      image: '📊',
      technologies: ['React', 'Python', 'TypeScript'],
      type: 'Dashboard',
      link: '#'
    },
    {
      title: 'SaaS Application',
      description: 'Мультитенантное SaaS-приложение для управления проектами',
      image: '💼',
      technologies: ['Next.js', 'TypeScript', 'Node.js'],
      type: 'SaaS',
      link: '#'
    },
    {
      title: 'Product Landing',
      description: 'Конверсионный лендинг с анимациями и интеграцией CRM',
      image: '🚀',
      technologies: ['React', 'TypeScript'],
      type: 'Landing Page',
      link: '#'
    },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesTech = selectedFilter === 'all' || project.technologies.includes(selectedFilter);
    const matchesType = selectedType === 'all' || project.type === selectedType;
    return matchesTech && matchesType;
  });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold neon-glow">DEV.PORTFOLIO</h1>
          <div className="flex gap-6">
            {['home', 'about', 'portfolio', 'contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-muted-foreground hover:text-primary transition-colors capitalize"
              >
                {item === 'home' ? 'Главная' : item === 'about' ? 'Обо мне' : item === 'portfolio' ? 'Портфолио' : 'Контакты'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in">
          <div className="inline-block mb-6">
            <Badge variant="outline" className="neon-border text-primary px-4 py-2 text-sm">
              Веб-разработчик
            </Badge>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-glow">
            Создаю
            <br />
            <span className="text-primary">Будущее</span> Веба
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Превращаю идеи в высокопроизводительные веб-приложения с современным стеком технологий
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="neon-border bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => scrollToSection('portfolio')}
            >
              <Icon name="Briefcase" size={20} className="mr-2" />
              Портфолио
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="neon-border-magenta"
              onClick={() => scrollToSection('contact')}
            >
              <Icon name="Mail" size={20} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-12 text-center">
            Обо <span className="text-secondary">мне</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Full-stack разработчик с 5+ годами опыта в создании современных веб-приложений. 
                Специализируюсь на React, TypeScript и Node.js.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Помогаю компаниям воплощать амбициозные идеи в жизнь через чистый код, 
                отличный UX и масштабируемую архитектуру.
              </p>
              <div className="flex gap-4 pt-4">
                <Button variant="ghost" size="icon" className="neon-border-purple hover:bg-accent">
                  <Icon name="Github" size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="neon-border-purple hover:bg-accent">
                  <Icon name="Linkedin" size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="neon-border-purple hover:bg-accent">
                  <Icon name="Twitter" size={24} />
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 animate-glow-pulse"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold mb-12 text-center">
            Мои <span className="text-accent">проекты</span>
          </h2>
          
          <div className="mb-12 space-y-6">
            <div>
              <h3 className="text-sm font-semibold mb-3 text-muted-foreground">ТЕХНОЛОГИИ</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant={selectedFilter === tech ? 'default' : 'outline'}
                    className={`cursor-pointer transition-all ${
                      selectedFilter === tech 
                        ? 'neon-border bg-primary text-primary-foreground' 
                        : 'hover:neon-border-purple'
                    }`}
                    onClick={() => setSelectedFilter(tech)}
                  >
                    {tech === 'all' ? 'Все' : tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3 text-muted-foreground">ТИП РАБОТЫ</h3>
              <div className="flex flex-wrap gap-3">
                {projectTypes.map((type) => (
                  <Badge
                    key={type}
                    variant={selectedType === type ? 'default' : 'outline'}
                    className={`cursor-pointer transition-all ${
                      selectedType === type 
                        ? 'neon-border-magenta bg-secondary text-secondary-foreground' 
                        : 'hover:neon-border-purple'
                    }`}
                    onClick={() => setSelectedType(type)}
                  >
                    {type === 'all' ? 'Все' : type}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card hover:neon-border-purple transition-all duration-300 group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-6xl mb-4">{project.image}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" className="w-full group-hover:neon-border">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Посмотреть проект
                </Button>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-muted-foreground">
                Проекты с такими параметрами не найдены
              </p>
            </div>
          )}
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-bold mb-12 text-center">
            Свяжитесь <span className="text-primary">со мной</span>
          </h2>
          <Card className="p-8 neon-border-purple">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Имя</label>
                <Input 
                  placeholder="Ваше имя" 
                  className="bg-muted border-border focus:neon-border"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <Input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="bg-muted border-border focus:neon-border"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите о вашем проекте..." 
                  className="bg-muted border-border focus:neon-border min-h-32"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full neon-border bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить сообщение
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-6">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 DEV.PORTFOLIO. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
