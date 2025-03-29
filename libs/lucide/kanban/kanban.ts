import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideKanban],svg[lucide-kanban]',
  host: {
    class: 'lucide lucide-kanban',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M6 5v11" />
    <svg:path d="M12 5v6" />
    <svg:path d="M18 5v14" />
  `,
})
export class LucideKanban {}
