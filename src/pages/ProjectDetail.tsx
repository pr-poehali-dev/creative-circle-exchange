import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = [
    { 
      id: '1', 
      type: 'film', 
      title: 'Короткометражка #1', 
      description: 'Первый опыт всей команды в роли режиссёров',
      image: 'https://cdn.poehali.dev/projects/41351d0f-174e-43d7-b916-6eee00933db3/files/428ec08f-10c2-408f-9350-43c2665ddfd8.jpg',
      fullDescription: 'Экспериментальная короткометражка, в которой каждый член команды попробовал себя в роли режиссёра. Мы разделили съёмки на 5 частей, и каждый день новый человек брал на себя полный контроль над процессом. Результат — уникальное произведение, где стиль меняется каждые 10 минут, отражая индивидуальность каждого творца.',
      year: '2024',
      duration: '45 мин',
      roles: 'Все участники — режиссёры, операторы, актёры',
      gallery: [
        'https://cdn.poehali.dev/projects/41351d0f-174e-43d7-b916-6eee00933db3/files/428ec08f-10c2-408f-9350-43c2665ddfd8.jpg',
        'https://cdn.poehali.dev/projects/41351d0f-174e-43d7-b916-6eee00933db3/files/30216a22-c42e-4044-b9e6-ff19dc6ea486.jpg',
      ]
    },
    { 
      id: '2', 
      type: 'music', 
      title: 'EP "Слепое звучание"', 
      description: 'Музыкальный эксперимент, где каждый пробует новый инструмент',
      image: 'https://cdn.poehali.dev/projects/41351d0f-174e-43d7-b916-6eee00933db3/files/2d624250-a041-45b3-9b69-53d80ca9d18f.jpg',
      fullDescription: 'Музыкальный EP из 6 треков, где каждый участник играл на инструментах, которыми никогда раньше не владел. Гитарист стал барабанщиком, диджей взял в руки саксофон, вокалист сел за синтезатор. Записано за одну неделю с минимальными дублями. Никакой обработки — только чистый звук эксперимента.',
      year: '2024',
      duration: '6 треков, 28 мин',
      roles: 'Каждый участник — композитор и исполнитель',
      gallery: [
        'https://cdn.poehali.dev/projects/41351d0f-174e-43d7-b916-6eee00933db3/files/2d624250-a041-45b3-9b69-53d80ca9d18f.jpg',
        'https://cdn.poehali.dev/projects/41351d0f-174e-43d7-b916-6eee00933db3/files/f9be5d20-db39-414b-9e56-254e640e86a1.jpg',
      ]
    },
    { 
      id: '3', 
      type: 'film', 
      title: 'Документалка о процессе', 
      description: 'История о том, как мы меняемся ролями',
      image: 'https://cdn.poehali.dev/projects/41351d0f-174e-43d7-b916-6eee00933db3/files/c4c43994-3cca-4359-8928-cb76b82a194a.jpg',
      fullDescription: 'Документальный фильм о философии кàэкус. Мы сняли год нашей работы, показывая, как происходит смена ролей, какие возникают конфликты и прорывы. Каждый участник снимал интервью с другими, будучи одновременно героем и автором. Честная история о творчестве без иерархии.',
      year: '2024',
      duration: '72 мин',
      roles: 'Все — режиссёры, операторы, герои',
      gallery: [
        'https://cdn.poehali.dev/projects/41351d0f-174e-43d7-b916-6eee00933db3/files/c4c43994-3cca-4359-8928-cb76b82a194a.jpg',
        'https://cdn.poehali.dev/projects/41351d0f-174e-43d7-b916-6eee00933db3/files/30216a22-c42e-4044-b9e6-ff19dc6ea486.jpg',
      ]
    },
    { 
      id: '4', 
      type: 'music', 
      title: 'Live сет', 
      description: 'Импровизационное выступление с ротацией участников',
      image: 'https://cdn.poehali.dev/projects/41351d0f-174e-43d7-b916-6eee00933db3/files/c15f01f1-3a8c-4be5-ac9b-29729e89ca1c.jpg',
      fullDescription: 'Живое выступление длиной 90 минут, где каждые 15 минут участники меняются местами и ролями. Диджей становится вокалистом, барабанщик идёт к синтезатору, гитарист берёт в руки сэмплер. Полная импровизация без репетиций. Записано в подвале заброшенного завода.',
      year: '2024',
      duration: '90 мин',
      roles: 'Все участники — музыканты, импровизаторы',
      gallery: [
        'https://cdn.poehali.dev/projects/41351d0f-174e-43d7-b916-6eee00933db3/files/c15f01f1-3a8c-4be5-ac9b-29729e89ca1c.jpg',
        'https://cdn.poehali.dev/projects/41351d0f-174e-43d7-b916-6eee00933db3/files/f9be5d20-db39-414b-9e56-254e640e86a1.jpg',
      ]
    },
  ];

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-oswald text-4xl font-bold mb-4">Проект не найден</h1>
          <Button onClick={() => navigate('/')} className="bg-black text-white">
            Вернуться на главную
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={() => navigate('/')} className="font-oswald text-3xl font-bold tracking-wide hover:opacity-60 transition-opacity">
            КÀЭКУС
          </button>
          <Button onClick={() => navigate('/')} variant="outline" className="border-black">
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад
          </Button>
        </div>
      </nav>

      <section className="pt-24">
        <div className="relative h-[70vh] overflow-hidden border-b-2 border-black">
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
            <div className="container mx-auto max-w-6xl">
              <div className="flex items-center gap-3 mb-4">
                <Icon name={project.type === 'film' ? 'Film' : 'Music'} size={32} />
                <span className="text-lg uppercase tracking-wider">
                  {project.type === 'film' ? 'Кино' : 'Музыка'}
                </span>
              </div>
              <h1 className="font-oswald text-5xl md:text-7xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl md:text-2xl opacity-90">{project.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-black">
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Год</p>
              <p className="font-oswald text-2xl font-semibold">{project.year}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Длительность</p>
              <p className="font-oswald text-2xl font-semibold">{project.duration}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Участие</p>
              <p className="font-oswald text-2xl font-semibold">Вся команда</p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-oswald text-3xl font-bold mb-6">О проекте</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              {project.fullDescription}
            </p>
            <Card className="p-6 bg-accent border-black">
              <p className="font-semibold mb-2">Роли в проекте:</p>
              <p className="text-muted-foreground">{project.roles}</p>
            </Card>
          </div>

          <div>
            <h2 className="font-oswald text-3xl font-bold mb-8">Галерея</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.gallery.map((img, index) => (
                <div key={index} className="relative h-80 overflow-hidden border-2 border-black group">
                  <img 
                    src={img}
                    alt={`${project.title} - фото ${index + 1}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-oswald text-4xl font-bold mb-6">Хотите узнать больше?</h2>
          <p className="text-xl mb-8 opacity-90">Свяжитесь с нами для обсуждения сотрудничества</p>
          <Button onClick={() => navigate('/#contact')} size="lg" className="bg-white text-black hover:bg-accent">
            Связаться с командой
          </Button>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-black">
        <div className="container mx-auto text-center">
          <button onClick={() => navigate('/')} className="font-oswald text-3xl font-bold mb-4 hover:opacity-60 transition-opacity">
            КÀЭКУС
          </button>
          <p className="text-muted-foreground">Творчество без границ ролей</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
