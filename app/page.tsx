'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type Lang = 'en' | 'es' | 'pt';

const translations = {
  en: {
    nav: { games: 'Games', released: 'Released', team: 'Team', contact: 'Contact' },
    hero: {
      label: 'INDEPENDENT GAME STUDIO // PARAGUAY',
      titleA: 'We make games',
      titleB: 'with a pulse.',
      body: 'An experienced game development team creating distinctive characters, satisfying mechanics and memorable play.',
      explore: 'Explore our games',
      released: 'Play now',
      development: 'Games in development',
      appStore: 'Games available in stores',
      experience: 'Experienced game makers',
      location: 'Asunción',
    },
    games: {
      label: 'CURRENTLY IN DEVELOPMENT',
      title: 'Our next games',
      intro: 'Two games with completely different energies, built with the same attention to every interaction.',
      status: 'ACTIVE DEVELOPMENT',
      mewBody: 'A web game where you collect unusual cats, unlock new variants and let your helper drone keep the operation moving.',
      infernoBody: 'A fast web arcade game where every bounce can save your run—or send everything straight into chaos.',
      details: 'GAME DETAILS',
      progress: 'WORK IN PROGRESS',
    },
    released: {
      label: 'RELEASED GAMES',
      title: 'Ready to play',
      intro: 'Published games available now on Apple devices.',
      albumBody: 'Recognize iconic covers, clear levels and put your music knowledge to the test.',
      footballBody: 'Guess the club from nationalities and formation. Play solo or challenge a friend.',
      store: 'VIEW ON APP STORE',
    },
    builds: {
      label: 'OPEN BUILDS / UNITY LAB',
      title: 'Prototype archive',
      intro: 'Playable experiments and open systems to explore on GitHub.',
      items: [
        'Clear the route and move every box to the station that matches its color.',
        'Remove nuts and bolts in the right order to release every piece.',
        'Rotate ramps, connect mechanisms and bring each level to life.',
        'A compact 3D puzzle about clearing the path inside a crowded pool.',
      ],
    },
    studio: {
      label: 'PADALUSTRO_OS / STUDIO PROFILE',
      titleA: 'Built by experience.',
      titleB: 'Driven by play.',
      body: 'We are an experienced Paraguayan team with years spent designing, developing and shipping expressive games across mobile and PC.',
      based: 'BASED IN',
      location: 'ASUNCIÓN, PARAGUAY',
      focus: 'FOCUS',
    },
    team: {
      label: 'PLAYER SELECT // 03',
      title: 'Meet the team',
      intro: 'The people behind every prototype, character and play session.',
      player: 'PLAYER',
    },
    contact: {
      label: 'NEW MESSAGE // READY',
      titleA: 'Let’s make',
      titleB: 'something fun.',
      body: 'For collaborations, opportunities or simply to talk about games made in Paraguay.',
    },
    footer: { made: 'MADE IN PARAGUAY · PLAYED EVERYWHERE', top: 'Top', developed: 'Site developed by' },
  },
  es: {
    nav: { games: 'Juegos', released: 'Publicados', team: 'Equipo', contact: 'Contacto' },
    hero: {
      label: 'ESTUDIO INDEPENDIENTE // PARAGUAY',
      titleA: 'Creamos juegos',
      titleB: 'con pulso propio.',
      body: 'Un equipo experimentado creando personajes con identidad, mecánicas satisfactorias y partidas memorables.',
      explore: 'Explorar juegos',
      released: 'Jugar ahora',
      development: 'Juegos en desarrollo',
      appStore: 'Juegos disponibles en tiendas',
      experience: 'Creadores con experiencia',
      location: 'Asunción',
    },
    games: {
      label: 'ACTUALMENTE EN DESARROLLO',
      title: 'Nuestros próximos juegos',
      intro: 'Dos juegos con energías completamente distintas y el mismo cuidado por cada interacción.',
      status: 'DESARROLLO ACTIVO',
      mewBody: 'Un juego web donde coleccionás gatos inusuales, desbloqueás variantes y dejás que tu dron mantenga la operación en movimiento.',
      infernoBody: 'Un arcade web rápido donde cada rebote puede salvar la partida o mandarlo todo directo al caos.',
      details: 'DETALLES DEL JUEGO',
      progress: 'TRABAJO EN PROGRESO',
    },
    released: {
      label: 'JUEGOS PUBLICADOS',
      title: 'Listos para jugar',
      intro: 'Juegos publicados y disponibles ahora en dispositivos Apple.',
      albumBody: 'Reconocé portadas, avanzá por niveles y poné a prueba cuánto sabés de música.',
      footballBody: 'Adiviná el club por nacionalidades y formación. Jugá solo o desafiá a un amigo.',
      store: 'VER EN APP STORE',
    },
    builds: {
      label: 'BUILDS ABIERTOS / UNITY LAB',
      title: 'Archivo de prototipos',
      intro: 'Experimentos jugables y sistemas abiertos para explorar en GitHub.',
      items: [
        'Despejá el camino y ubicá cada caja en la estación de su color.',
        'Quitá tuercas y tornillos en el orden correcto para liberar las piezas.',
        'Rotá rampas, conectá mecanismos y hacé funcionar cada nivel.',
        'Un puzzle 3D compacto sobre despejar el camino dentro de una piscina.',
      ],
    },
    studio: {
      label: 'PADALUSTRO_OS / PERFIL DEL ESTUDIO',
      titleA: 'Hecho con experiencia.',
      titleB: 'Guiado por el juego.',
      body: 'Somos un equipo paraguayo experimentado con años diseñando, desarrollando y publicando juegos expresivos para móviles y PC.',
      based: 'DESDE',
      location: 'ASUNCIÓN, PARAGUAY',
      focus: 'ENFOQUE',
    },
    team: {
      label: 'SELECCIÓN DE JUGADOR // 03',
      title: 'Conocé al equipo',
      intro: 'Las personas detrás de cada prototipo, personaje y partida.',
      player: 'JUGADOR',
    },
    contact: {
      label: 'NUEVO MENSAJE // LISTO',
      titleA: 'Hagamos algo',
      titleB: 'divertido.',
      body: 'Para colaboraciones, oportunidades o simplemente hablar de videojuegos hechos en Paraguay.',
    },
    footer: { made: 'HECHO EN PARAGUAY · JUGADO EN TODO EL MUNDO', top: 'Inicio', developed: 'Sitio desarrollado por' },
  },
  pt: {
    nav: { games: 'Jogos', released: 'Lançados', team: 'Equipe', contact: 'Contato' },
    hero: {
      label: 'ESTÚDIO INDEPENDENTE // PARAGUAI',
      titleA: 'Criamos jogos',
      titleB: 'com pulso próprio.',
      body: 'Uma equipe experiente criando personagens marcantes, mecânicas satisfatórias e partidas memoráveis.',
      explore: 'Explorar jogos',
      released: 'Jogar agora',
      development: 'Jogos em desenvolvimento',
      appStore: 'Jogos disponíveis nas lojas',
      experience: 'Criadores experientes',
      location: 'Assunção',
    },
    games: {
      label: 'ATUALMENTE EM DESENVOLVIMENTO',
      title: 'Nossos próximos jogos',
      intro: 'Dois jogos com energias completamente diferentes e o mesmo cuidado em cada interação.',
      status: 'DESENVOLVIMENTO ATIVO',
      mewBody: 'Um jogo web onde você coleciona gatos incomuns, desbloqueia variantes e deixa seu drone manter a operação em movimento.',
      infernoBody: 'Um arcade web rápido onde cada quique pode salvar a partida ou mandar tudo direto para o caos.',
      details: 'DETALHES DO JOGO',
      progress: 'TRABALHO EM ANDAMENTO',
    },
    released: {
      label: 'JOGOS LANÇADOS',
      title: 'Prontos para jogar',
      intro: 'Jogos publicados e disponíveis agora em dispositivos Apple.',
      albumBody: 'Reconheça capas, avance pelos níveis e teste seu conhecimento musical.',
      footballBody: 'Adivinhe o clube pelas nacionalidades e formação. Jogue solo ou desafie um amigo.',
      store: 'VER NA APP STORE',
    },
    builds: {
      label: 'BUILDS ABERTAS / UNITY LAB',
      title: 'Arquivo de protótipos',
      intro: 'Experimentos jogáveis e sistemas abertos para explorar no GitHub.',
      items: [
        'Abra o caminho e leve cada caixa até a estação da cor correta.',
        'Remova porcas e parafusos na ordem certa para liberar as peças.',
        'Gire rampas, conecte mecanismos e faça cada nível funcionar.',
        'Um puzzle 3D compacto sobre abrir caminho dentro de uma piscina.',
      ],
    },
    studio: {
      label: 'PADALUSTRO_OS / PERFIL DO ESTÚDIO',
      titleA: 'Feito com experiência.',
      titleB: 'Guiado pelo jogo.',
      body: 'Somos uma equipe paraguaia experiente com anos projetando, desenvolvendo e lançando jogos expressivos para mobile e PC.',
      based: 'BASEADO EM',
      location: 'ASSUNÇÃO, PARAGUAI',
      focus: 'FOCO',
    },
    team: {
      label: 'SELEÇÃO DE JOGADOR // 03',
      title: 'Conheça a equipe',
      intro: 'As pessoas por trás de cada protótipo, personagem e partida.',
      player: 'JOGADOR',
    },
    contact: {
      label: 'NOVA MENSAGEM // PRONTO',
      titleA: 'Vamos criar algo',
      titleB: 'divertido.',
      body: 'Para colaborações, oportunidades ou simplesmente conversar sobre jogos feitos no Paraguai.',
    },
    footer: { made: 'FEITO NO PARAGUAI · JOGADO EM TODO O MUNDO', top: 'Topo', developed: 'Site desenvolvido por' },
  },
} as const;

const projects = [
  { code: 'BUILD_01', name: 'Alice Express', tags: ['Unity', 'C#', '3D Puzzle'], url: 'https://github.com/alesilvaa/Alice-Express-Game', color: 'cyan' },
  { code: 'BUILD_02', name: 'Screw Puzzle', tags: ['Unity', 'C#', '3D'], url: 'https://github.com/alesilvaa/Screw-Puzzle', color: 'yellow' },
  { code: 'BUILD_03', name: 'Factory Revolution', tags: ['Unity', 'C#', 'Logic'], url: 'https://github.com/alesilvaa/FactoryRevolutionPuzzle', color: 'coral' },
  { code: 'BUILD_04', name: 'Kids Pool Party', tags: ['Unity', 'C#', '3D Puzzle'], url: 'https://github.com/alesilvaa/Kids-Pool-Party', color: 'violet' },
];

const team = [
  { name: 'Alejandro Acosta', image: '/images/workers/alejandro-acosta.jpg', accent: 'yellow' },
  { name: 'Juanse Colina', image: '/images/workers/juanse-colina.jpeg', accent: 'cyan' },
  { name: 'Francisco Armoa', image: '/images/workers/francisco-armoa.webp', accent: 'coral' },
];

const releasedGames = [
  {
    className: 'album-game',
    category: 'MUSIC TRIVIA',
    url: 'https://apps.apple.com/us/app/guess-the-album-cover/id6765707853',
    logo: '/images/quarahy-games/GTAC-logo.png',
    logoWidth: 1024,
    logoHeight: 1024,
    screens: [
      '/images/quarahy-games/GTAC-Screen1.webp',
      '/images/quarahy-games/GTAC-Screen2.webp',
      '/images/quarahy-games/GTAC-Screen3.webp',
    ],
    stats: '160+ ALBUMS · 5 GENRES',
    title: 'Guess The Album Cover',
    body: 'albumBody' as const,
  },
  {
    className: 'football-game',
    category: 'SPORTS TRIVIA',
    url: 'https://apps.apple.com/us/app/guess-the-football-club-2026/id6755687109',
    logo: '/images/quarahy-games/GTFC-logo.webp',
    logoWidth: 400,
    logoHeight: 400,
    screens: [
      '/images/quarahy-games/GTFC-Screen1.webp',
      '/images/quarahy-games/GTFC-Screen2.webp',
      '/images/quarahy-games/GTFC-Screen3.webp',
    ],
    stats: '60+ CLUBS · 1000+ PLAYERS',
    title: 'Guess The Football Club',
    body: 'footballBody' as const,
  },
];

export default function Home() {
  const [lang, setLang] = useState<Lang>('en');
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
  }, [lang]);

  useEffect(() => {
    const revealSelector = [
      '.section-head > *',
      '.game-info > *',
      '.build-card h3',
      '.build-card > p',
      '.build-tags',
      '.studio-console > p',
      '.studio-console > h2',
      '.studio-copy > *',
      '.player-name',
      '.contact-art',
      '.contact-copy > *',
      'footer > *',
    ].join(',');
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    revealItems.forEach((item, index) => {
      item.classList.add('scroll-reveal');
      item.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    if (reducedMotion) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
    } else {
      revealItems.forEach((item) => observer.observe(item));
    }

    const progress = document.querySelector<HTMLElement>('.scroll-progress');
    const hero = document.querySelector<HTMLElement>('.hero');
    const heroCopy = document.querySelector<HTMLElement>('.hero-copy');
    const heroCard = document.querySelector<HTMLElement>('.hero-logo-card');
    const heroGrid = document.querySelector<HTMLElement>('.hero-grid');
    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      if (progress) progress.style.transform = `scaleX(${ratio})`;

      if (hero && !reducedMotion) {
        const heroRatio = Math.min(Math.max(window.scrollY / Math.max(hero.offsetHeight * 0.82, 1), 0), 1);
        const visibility = Math.max(1 - heroRatio * 0.34, 0.66);
        heroCopy?.style.setProperty('--hero-scroll-y', `${heroRatio * -18}px`);
        heroCopy?.style.setProperty('--hero-visibility', `${visibility}`);
        heroCard?.style.setProperty('--hero-scroll-y', `${heroRatio * -9}px`);
        heroCard?.style.setProperty('--hero-visibility', `${visibility}`);
        heroGrid?.style.setProperty('--hero-grid-y', `${heroRatio * 18}px`);
      }
    };
    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    let pointerFrame = 0;
    let pointerX = 0;
    let pointerY = 0;
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const updatePointer = () => {
      pointerFrame = 0;
      if (!heroCard) return;
      heroCard.style.setProperty('--tilt-x', `${pointerY * -2.2}deg`);
      heroCard.style.setProperty('--tilt-y', `${pointerX * 2.6}deg`);
      heroCard.style.setProperty('--logo-x', `${pointerX * 9}px`);
      heroCard.style.setProperty('--logo-y', `${pointerY * 7}px`);
      heroCard.style.setProperty('--aura-x', `${pointerX * 3}px`);
      heroCard.style.setProperty('--aura-y', `${pointerY * 2.5}px`);
      heroCard.style.setProperty('--light-x', `${50 + pointerX * 16}%`);
      heroCard.style.setProperty('--light-y', `${48 + pointerY * 14}%`);
    };
    const handlePointerMove = (event: PointerEvent) => {
      if (!heroCard) return;
      const rect = heroCard.getBoundingClientRect();
      pointerX = Math.max(-1, Math.min((event.clientX - rect.left) / rect.width * 2 - 1, 1));
      pointerY = Math.max(-1, Math.min((event.clientY - rect.top) / rect.height * 2 - 1, 1));
      if (!pointerFrame) pointerFrame = window.requestAnimationFrame(updatePointer);
    };
    const resetPointer = () => {
      if (!heroCard) return;
      pointerX = 0;
      pointerY = 0;
      heroCard.style.setProperty('--tilt-x', '0deg');
      heroCard.style.setProperty('--tilt-y', '0deg');
      heroCard.style.setProperty('--logo-x', '0px');
      heroCard.style.setProperty('--logo-y', '0px');
      heroCard.style.setProperty('--aura-x', '0px');
      heroCard.style.setProperty('--aura-y', '0px');
      heroCard.style.setProperty('--light-x', '50%');
      heroCard.style.setProperty('--light-y', '48%');
    };

    if (heroCard && canHover && !reducedMotion) {
      heroCard.addEventListener('pointermove', handlePointerMove);
      heroCard.addEventListener('pointerleave', resetPointer);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
      if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
      heroCard?.removeEventListener('pointermove', handlePointerMove);
      heroCard?.removeEventListener('pointerleave', resetPointer);
    };
  }, []);

  return (
    <main className="site-shell">
      <div className="scroll-progress" aria-hidden="true" />
      <nav className="topbar" aria-label="Main navigation">
        <a className="top-brand" href="#home" aria-label="Padalustro Games">
          <span className="top-logo"><Image src="/images/logo-padalustro-games.png" alt="" width={625} height={446} priority /></span>
          <span>Padalustro <b>Games</b></span>
        </a>
        <div className="nav-links">
          <a href="#games">{t.nav.games}</a><a href="#released">{t.nav.released}</a><a href="#team">{t.nav.team}</a>
        </div>
        <div className="top-actions">
          <div className="language-switcher" aria-label="Language">
            {(['en', 'es', 'pt'] as Lang[]).map((item) => (
              <button key={item} className={lang === item ? 'active' : ''} onClick={() => setLang(item)} aria-pressed={lang === item}>
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="top-cta" href="#contact"><span /> {t.nav.contact}</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="system-label"><span className="live-dot" /> {t.hero.label}</div>
          <h1>
            <span className="hero-title-line"><span>{t.hero.titleA}</span></span>
            <span className="hero-title-line"><em>{t.hero.titleB}</em></span>
          </h1>
          <p>{t.hero.body}</p>
          <div className="hero-actions">
            <a className="game-button primary" href="#games"><span>▶</span>{t.hero.explore}</a>
            <a className="game-button secondary" href="#released">{t.hero.released}</a>
          </div>
          <div className="hero-proof">
            <span><i />{t.hero.development}</span>
            <span><i />{t.hero.appStore}</span>
            <span><i />{t.hero.experience}</span>
          </div>
        </div>

        <div className="hero-logo-card" aria-label="Padalustro Games">
          <span className="hero-card-trace" aria-hidden="true" />
          <span className="hero-logo-aura" aria-hidden="true" />
          <span className="hero-logo-sheen" aria-hidden="true" />
          <span className="hero-logo-mark">
            <Image src="/images/logo-padalustro-games.png" alt="Padalustro Games" width={625} height={446} priority />
          </span>
        </div>
      </section>

      <section className="games" id="games">
        <header className="section-head light">
          <div><span className="live-dot" /> {t.games.label}</div>
          <h2>{t.games.title}</h2>
          <p>{t.games.intro}</p>
        </header>

        <div className="featured-grid">
          <article className="game-card mew-card" id="mewclicker">
            <div className="game-card-top"><span>GAME_01</span><span>{t.games.status}</span></div>
            <div className="game-art mew-game-art">
              <div className="mew-orbit" aria-hidden="true" />
              <div className="mew-scanline" aria-hidden="true" />
              <div className="mew-collection-panel">
                <span>CATALOG_09</span>
                <Image className="mew-cast-front" src="/images/mewclicker-cats-row.webp" alt="MewClicker cat collection" width={3164} height={820} />
              </div>
              <Image className="mew-drone" src="/images/dron-helper.png" alt="MewClicker helper drone" width={500 } height={500} />
              <span className="art-status mew-art-status"><i /> COLLECTION ONLINE</span>
            </div>
            <div className="game-info">
              <div><small>{t.games.details}</small><h3>MewClicker</h3></div>
              <p>{t.games.mewBody}</p>
              <div className="game-tags"><span>CLICKER</span><span>COLLECTION</span><span>WEB</span></div>
            </div>
            <div className="game-progress"><i /><span>{t.games.progress}</span></div>
          </article>

          <article className="game-card inferno-card" id="disco-infierno">
            <div className="game-card-top"><span>GAME_02</span><span>{t.games.status}</span></div>
            <div className="game-art inferno-game-art">
              <div className="inferno-orbit" aria-hidden="true" />
              <div className="inferno-speed-lines" aria-hidden="true" />
              <Image className="inferno-shark" src="/images/pez.png" alt="Disco Inferno shark" width={781} height={482} />
              <Image className="inferno-disc" src="/images/disco-player.png" alt="Disco Inferno player" width={568} height={538} />
              <Image className="inferno-bouncer" src="/images/rebotador.png" alt="" width={541} height={511} />
              <Image className="inferno-trap" src="/images/trampa-oso.png" alt="" width={461} height={443} />
              <div className="inferno-enemy-card">
                <span>THREAT_SCAN</span>
                <Image className="inferno-enemies-a" src="/images/disco-inferno-enemies-a.png" alt="Disco Infierno enemies" width={484} height={490} />
              </div>
              <div className="inferno-enemy-strip">
                <span>ENEMY_SET_04</span>
                <Image className="inferno-enemies-b" src="/images/disco-inferno-enemies-b.png" alt="Disco Infierno enemy variants" width={876} height={272} />
              </div>
              <span className="art-status inferno-art-status"><i /> RUN IN PROGRESS</span>
            </div>
            <div className="game-info">
              <div><small>{t.games.details}</small><h3>Disco Infierno</h3></div>
              <p>{t.games.infernoBody}</p>
              <div className="game-tags"><span>ARCADE</span><span>ACTION</span><span>WEB</span></div>
            </div>
            <div className="game-progress"><i /><span>{t.games.progress}</span></div>
          </article>
        </div>
      </section>

      <section className="released" id="released">
        <header className="section-head dark">
          <div><span className="section-number">02</span>{t.released.label}</div>
          <h2>{t.released.title}</h2>
          <p>{t.released.intro}</p>
        </header>
        <div className="release-grid">
          {releasedGames.map((game) => (
            <a className={`release-card ${game.className}`} href={game.url} target="_blank" rel="noreferrer" key={game.title}>
              <span className="release-category">{game.category}</span>
              <div className="release-screens" aria-hidden="true">
                {game.screens.map((screen, index) => (
                  <Image className="release-screen" src={screen} alt="" width={460} height={995} key={screen} priority={index === 0} />
                ))}
              </div>
              <div className="release-copy">
                <div className="release-copy-text">
                  <small>{game.stats}</small>
                  <h3>{game.title}</h3>
                  <p>{t.released[game.body]}</p>
                  <Image className="release-store-badge" src="/images/quarahy-games/appstore-white.svg" alt={t.released.store} width={120} height={40} />
                </div>
                <Image className="release-logo" src={game.logo} alt="" width={game.logoWidth} height={game.logoHeight} />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="builds">
        <header className="section-head dark compact">
          <div><span className="terminal-cursor" />{t.builds.label}</div>
          <h2>{t.builds.title}</h2>
          <p>{t.builds.intro}</p>
        </header>
        <div className="build-grid">
          {projects.map((project, index) => (
            <a className={`build-card ${project.color}`} href={project.url} target="_blank" rel="noreferrer" key={project.code}>
              <div className="build-top"><span>{project.code}</span><b>GH ↗</b></div>
              <div className="build-glyph" aria-hidden="true"><i /><i /><i /></div>
              <h3>{project.name}</h3><p>{t.builds.items[index]}</p>
              <div className="build-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </a>
          ))}
        </div>
      </section>

      <section className="studio">
        <div className="studio-console">
          <div className="console-leds"><i /><i /><i /></div><p>{t.studio.label}</p>
          <h2>{t.studio.titleA}<br /><span>{t.studio.titleB}</span></h2>
          <div className="studio-copy">
            <p>{t.studio.body}</p>
            <div><span>{t.studio.based}</span><b>{t.studio.location}</b></div>
            <div><span>{t.studio.focus}</span><b>2D · 3D · MOBILE · PC · WEB</b></div>
          </div>
        </div>
      </section>

      <section className="team" id="team">
        <header className="section-head team-heading">
          <div>{t.team.label}</div><h2>{t.team.title}</h2><p>{t.team.intro}</p>
        </header>
        <div className="team-grid">
          {team.map((person, index) => (
            <article className={`team-card ${person.accent}`} key={person.name}>
              <div className="portrait"><div className="portrait-grid" aria-hidden="true" /><Image src={person.image} alt={person.name} width={668} height={668} /></div>
              <div className="player-name"><span>{t.team.player} {String(index + 1).padStart(2, '0')}</span><h3>{person.name}</h3></div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-art"><div className="contact-logo"><Image src="/images/logo-padalustro-games.png" alt="Padalustro Games" width={625} height={446} /></div><Image src="/images/disco-player.png" className="contact-disc" alt="" width={568} height={538} /></div>
        <div className="contact-copy"><span>{t.contact.label}</span><h2>{t.contact.titleA}<br />{t.contact.titleB}</h2><p>{t.contact.body}</p><a href="mailto:contact@padalustrogames.com">contact@padalustrogames.com <b>↗</b></a></div>
      </section>

      <footer>
        <div className="footer-brand"><span className="top-logo"><Image src="/images/logo-padalustro-games.png" alt="" width={625} height={446} /></span><strong>Padalustro Games</strong></div>
        <div className="footer-center">
          <p>{t.footer.made}</p>
          <a className="manageopy-credit" href="https://www.manageopy.com/" target="_blank" rel="noreferrer" aria-label={`${t.footer.developed} Manageopy`}>
            <span className="manageopy-mark" aria-hidden="true"><Image src="/images/manageopy.png" alt="" width={256} height={256} /></span>
            <span className="manageopy-copy"><small>{t.footer.developed}</small><strong>Manageopy</strong></span>
            <span className="manageopy-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="footer-links"><a href="https://github.com/alesilvaa" target="_blank" rel="noreferrer">GitHub ↗</a><a href="#home">{t.footer.top} ↑</a></div>
      </footer>
    </main>
  );
}
