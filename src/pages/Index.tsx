import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const navigate = useNavigate();

  const roles = [
    { id: 'director', name: 'Режиссёр', icon: 'Film' },
    { id: 'actor', name: 'Актёр', icon: 'User' },
    { id: 'writer', name: 'Сценарист', icon: 'PenTool' },
    { id: 'composer', name: 'Композитор', icon: 'Music' },
    { id: 'dj', name: 'DJ', icon: 'Disc3' },
  ];

  const portfolio = [
    { 
      id: 1, 
      type: 'film', 
      title: 'Короткометражка #1', 
      description: 'Первый опыт всей команды в роли режиссёров',
      image: 'https://cdn.poehali.dev/projects/41351d0f-174e-43d7-b916-6eee00933db3/files/428ec08f-10c2-408f-9350-43c2665ddfd8.jpg'
    },
    { 
      id: 2, 
      type: 'music', 
      title: 'EP "Слепое звучание"', 
      description: 'Музыкальный эксперимент, где каждый пробует новый инструмент',
      image: 'https://cdn.poehali.dev/projects/41351d0f-174e-43d7-b916-6eee00933db3/files/2d624250-a041-45b3-9b69-53d80ca9d18f.jpg'
    },
    { 
      id: 3, 
      type: 'film', 
      title: 'Документалка о процессе', 
      description: 'История о том, как мы меняемся ролями',
      image: 'https://cdn.poehali.dev/projects/41351d0f-174e-43d7-b916-6eee00933db3/files/c4c43994-3cca-4359-8928-cb76b82a194a.jpg'
    },
    { 
      id: 4, 
      type: 'music', 
      title: 'Live сет', 
      description: 'Импровизационное выступление с ротацией участников',
      image: 'https://cdn.poehali.dev/projects/41351d0f-174e-43d7-b916-6eee00933db3/files/c15f01f1-3a8c-4be5-ac9b-29729e89ca1c.jpg'
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-oswald text-3xl font-bold tracking-wide">КÀЭКУС</h1>
          <div className="flex gap-8">
            <a href="#about" className="hover:opacity-60 transition-opacity">О нас</a>
            <a href="#team" className="hover:opacity-60 transition-opacity">Команда</a>
            <a href="#portfolio" className="hover:opacity-60 transition-opacity">Работы</a>
            <a href="#contact" className="hover:opacity-60 transition-opacity">Связь</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <p className="text-sm uppercase tracking-[0.3em] mb-4 text-muted-foreground">Caecus / Слепой</p>
            <h2 className="font-oswald text-6xl md:text-8xl font-bold mb-8 leading-tight">
              МЫ ТВОРИМ<br />В ТЕМНОТЕ
            </h2>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12">
              Творческий коллектив, где каждый участник постоянно меняет роли. 
              Сегодня ты режиссёр, завтра — актёр, послезавтра — композитор. 
              Мы создаём кино и музыку, не зная заранее, кем станем в процессе.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-black text-white hover:bg-secondary">
                <a href="#portfolio">Смотреть работы</a>
              </Button>
              <Button size="lg" variant="outline" className="border-black hover:bg-accent">
                <a href="#contact">Связаться</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-accent">
        <div className="container mx-auto max-w-5xl">
          <div className="animate-slide-up">
            <h3 className="font-oswald text-4xl md:text-5xl font-bold mb-12 text-center">Философия проекта</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 border-black bg-white hover:shadow-2xl transition-shadow">
                <Icon name="RefreshCw" size={40} className="mb-4" />
                <h4 className="font-oswald text-2xl font-semibold mb-4">Ротация ролей</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Никто не застревает в одной роли. Режиссёр становится актёром, актёр — сценаристом, 
                  композитор — диджеем. Постоянное движение и эксперимент.
                </p>
              </Card>
              <Card className="p-8 border-black bg-white hover:shadow-2xl transition-shadow">
                <Icon name="Users" size={40} className="mb-4" />
                <h4 className="font-oswald text-2xl font-semibold mb-4">Равенство в творчестве</h4>
                <p className="text-muted-foreground leading-relaxed">
                  5-7 участников, каждый имеет равный голос. Нет иерархии, есть только 
                  общая цель — создавать что-то новое через опыт друг друга.
                </p>
              </Card>
              <Card className="p-8 border-black bg-white hover:shadow-2xl transition-shadow">
                <Icon name="Eye" size={40} className="mb-4" />
                <h4 className="font-oswald text-2xl font-semibold mb-4">Слепое творчество</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Caecus — слепой. Мы не знаем заранее, кем станем в процессе. 
                  Эта неопределённость рождает уникальный творческий опыт.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="font-oswald text-4xl md:text-5xl font-bold mb-12 text-center">Команда</h3>
          <p className="text-center text-xl mb-16 text-muted-foreground max-w-2xl mx-auto">
            5-7 творцов, каждый из которых постоянно меняет роли. Мы все — режиссёры, актёры, сценаристы, композиторы и диджеи.
          </p>

          <div className="mb-20">
            <div className="relative h-96 md:h-[600px] overflow-hidden border-2 border-black mb-8">
              <img 
                src="https://cdn.poehali.dev/projects/41351d0f-174e-43d7-b916-6eee00933db3/files/3556ecb0-639b-405c-beae-1c867e5a1341.jpg"
                alt="Команда кàэкус"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <h4 className="font-oswald text-3xl font-bold mb-4">Мы — кàэкус</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Коллектив без иерархии, где каждый имеет равный голос и возможность попробовать себя во всех творческих ролях. 
                Сегодня ты за камерой, завтра — перед ней. Послезавтра пишешь сценарий или музыку.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-oswald text-3xl font-bold mb-8 text-center">Роли в проекте</h4>
            <p className="text-center text-lg mb-12 text-muted-foreground max-w-2xl mx-auto">
              Нажмите на роль, чтобы узнать больше о нашем подходе
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(selectedRole === role.id ? null : role.id)}
                  className={`p-8 border-2 transition-all hover:scale-105 ${
                    selectedRole === role.id
                      ? 'bg-black text-white border-black'
                      : 'bg-white border-black hover:bg-accent'
                  }`}
                >
                  <Icon name={role.icon as any} size={32} className="mx-auto mb-4" />
                  <p className="font-oswald text-lg">{role.name}</p>
                </button>
              ))}
            </div>
            {selectedRole && (
              <Card className="p-8 border-black animate-fade-in bg-accent">
                <p className="text-lg leading-relaxed">
                  Каждый участник кàэкус пробует себя в роли {roles.find(r => r.id === selectedRole)?.name.toLowerCase()}а. 
                  Мы верим, что понять творческий процесс можно только изнутри — побывав на месте 
                  каждого члена команды.
                </p>
              </Card>
            )}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <h3 className="font-oswald text-4xl md:text-5xl font-bold mb-12 text-center">Наши работы</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((item, index) => (
              <Card 
                key={item.id} 
                onClick={() => navigate(`/project/${item.id}`)}
                className="group bg-white text-black border-0 overflow-hidden hover:scale-[1.02] transition-all cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-80 overflow-hidden border-b-2 border-black">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Icon name="ArrowRight" size={48} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name={item.type === 'film' ? 'Film' : 'Music'} size={20} />
                    <span className="text-sm uppercase tracking-wider text-muted-foreground">
                      {item.type === 'film' ? 'Кино' : 'Музыка'}
                    </span>
                  </div>
                  <h4 className="font-oswald text-2xl font-semibold mb-3">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <h3 className="font-oswald text-4xl md:text-5xl font-bold mb-6 text-center">Связь и сотрудничество</h3>
          <p className="text-center text-xl mb-12 text-muted-foreground">
            Хотите работать с нами или просто узнать больше? Напишите нам
          </p>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold">Ваше имя</label>
              <Input className="border-black focus:ring-black" placeholder="Как к вам обращаться?" />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Email</label>
              <Input type="email" className="border-black focus:ring-black" placeholder="example@email.com" />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Сообщение</label>
              <Textarea 
                className="border-black focus:ring-black min-h-32" 
                placeholder="Расскажите о своей идее или вопросе..."
              />
            </div>
            <Button size="lg" className="w-full bg-black text-white hover:bg-secondary">
              Отправить сообщение
            </Button>
          </form>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-black bg-accent">
        <div className="container mx-auto text-center">
          <h2 className="font-oswald text-3xl font-bold mb-4">КÀЭКУС</h2>
          <p className="text-muted-foreground mb-6">Творчество без границ ролей</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:opacity-60 transition-opacity">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:opacity-60 transition-opacity">
              <Icon name="Youtube" size={24} />
            </a>
            <a href="#" className="hover:opacity-60 transition-opacity">
              <Icon name="Music" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;