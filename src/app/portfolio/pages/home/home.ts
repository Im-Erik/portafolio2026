
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
})
export class Home {
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
      description: 'Tienda digital con experiencia de compra fluida, catálogo dinámico y diseño elegante.',
      tech: ['Angular', 'TypeScript', 'Tailwind'],
      link: '#contacto',
    },
    {
      title: 'Dashboard Analítico',
      description: 'Panel de métricas pensado para decisiones rápidas con visualizaciones claras y enfoque UX.',
      tech: ['Angular', 'RxJS', 'Charts'],
      link: '#contacto',
    },
    {
      title: 'Portafolio Interactivo',
      description: 'Experiencia moderna y minimalista para mostrar trabajo, habilidades y contacto de forma atractiva.',
      tech: ['Angular', 'DaisyUI', 'CSS'],
      link: '#contacto',
    },
  ];
}
