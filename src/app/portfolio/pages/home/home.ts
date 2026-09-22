
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
})
export class Home {
  isDarkMode = false;
  private readonly themeStorageKey = 'portfolio-theme';

  constructor() {
    if (typeof window !== 'undefined') {
      this.isDarkMode = window.localStorage.getItem(this.themeStorageKey) === 'dark';
      this.applyTheme();
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  private applyTheme(): void {
    if (typeof window === 'undefined') {
      return;
    }

    document.body.classList.toggle('theme-dark', this.isDarkMode);
    document.body.classList.toggle('theme-light', !this.isDarkMode);
    document.documentElement.classList.toggle('dark', this.isDarkMode);
    document.documentElement.style.colorScheme = this.isDarkMode ? 'dark' : 'light';
    window.localStorage.setItem(this.themeStorageKey, this.isDarkMode ? 'dark' : 'light');
  }

  services = [
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Interfaces hermosas y intuitivas diseñadas con atención al detalle y enfoque en usuario.',
    },
    {
      icon: '⚛️',
      title: 'Development',
      description: 'Código limpio, escalable y performante usando Angular y las mejores prácticas.',
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Diseños que se adaptan perfectamente a cualquier dispositivo y pantalla.',
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Optimización de velocidad y carga para experiencias fluidas y rápidas.',
    },
    {
      icon: '♿',
      title: 'Accesibilidad',
      description: 'Productos inclusivos que pueden ser usados por todos sin limitaciones.',
    },
    {
      icon: '🔍',
      title: 'SEO Friendly',
      description: 'Implementación de mejores prácticas SEO para maximizar visibilidad online.',
    },
  ];

  projects = [
    {
      title: 'E-commerce Premium',
      summary: 'Tienda digital con experiencia de compra fluida, catálogo dinámico y diseño elegante.',
      problem: 'Necesitaba una experiencia de compra que transmitiera confianza y redujera fricción en el proceso de pago.',
      solution: 'Diseñé y desarrollé una interfaz moderna con catálogo, carrito y flujo de compra claro, pensado para convertir visitantes en clientes.',
      stackFront: ['Angular', 'TypeScript', 'Tailwind CSS', 'RxJS'],
      stackBack: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      challenge: 'Configurar la base de datos relacional y definir la estructura de pedidos fue el mayor reto. Lo resolví con un modelo escalable y relaciones bien definidas.',
      repositoryUrl: 'https://github.com/',
      liveUrl: 'https://example.com/',
    },
    {
      title: 'Dashboard Analítico',
      summary: 'Panel de métricas pensado para decisiones rápidas con visualizaciones claras y enfoque UX.',
      problem: 'El equipo necesitaba ver indicadores clave sin perder tiempo revisando múltiples fuentes de información.',
      solution: 'Construí un dashboard limpio y responsivo que organiza métricas principales en vistas intuitivas y accionables.',
      stackFront: ['Angular', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
      stackBack: ['Node.js', 'NestJS', 'PostgreSQL', 'REST APIs'],
      challenge: 'La integración de múltiples fuentes de datos y la sincronización de métricas en tiempo real fue el desafío central. Lo abordé con servicios bien desacoplados y una arquitectura ordenada.',
      repositoryUrl: 'https://github.com/',
      liveUrl: 'https://example.com/',
    },
    {
      title: 'Portafolio Interactivo',
      summary: 'Experiencia moderna y minimalista para mostrar trabajo, habilidades y contacto de forma atractiva.',
      problem: 'Se necesitaba una presencia digital que destacara el trabajo y facilitara la conexión con potenciales clientes.',
      solution: 'Desarrollé una landing page elegante, rápida y narrativa, con una estructura clara para presentar proyectos, stack y contacto.',
      stackFront: ['Angular', 'TypeScript', 'CSS3', 'Tailwind CSS'],
      stackBack: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
      challenge: 'Equilibrar estética y rendimiento fue el mayor reto. Lo resolví cuidando la estructura del contenido y optimizando la carga de recursos.',
      repositoryUrl: 'https://github.com/',
      liveUrl: 'https://example.com/',
    },
        {
      title: 'Portafolio Interactivo',
      summary: 'Experiencia moderna y minimalista para mostrar trabajo, habilidades y contacto de forma atractiva.',
      problem: 'Se necesitaba una presencia digital que destacara el trabajo y facilitara la conexión con potenciales clientes.',
      solution: 'Desarrollé una landing page elegante, rápida y narrativa, con una estructura clara para presentar proyectos, stack y contacto.',
      stackFront: ['Angular', 'TypeScript', 'CSS3', 'Tailwind CSS'],
      stackBack: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
      challenge: 'Equilibrar estética y rendimiento fue el mayor reto. Lo resolví cuidando la estructura del contenido y optimizando la carga de recursos.',
      repositoryUrl: 'https://github.com/',
      liveUrl: 'https://example.com/',
    },
  ];

  expandedProjectIndex: number | null = null;

  toggleProject(index: number): void {
    this.expandedProjectIndex = this.expandedProjectIndex === index ? null : index;
  }

  stackCategories = [
    {
      icon: '🧩',
      title: 'Front-end',
      items: ['Angular', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'RxJS'],
    },
    {
      icon: '⚙️',
      title: 'Back-end',
      items: ['Node.js', 'Laravel', 'APIs REST', 'JWT', 'NestJS'],
    },
    {
      icon: '🗄️',
      title: 'Bases de datos',
      items: ['PostgreSQL', 'MySQL', 'MongoDB'],
    },
    {
      icon: '🛠️',
      title: 'Herramientas',
      items: ['Git & GitHub', 'Docker', 'VS Code', 'Figma', 'Postman'],
    },
  ];
}
