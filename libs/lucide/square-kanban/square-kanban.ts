import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareKanban],svg[lucide-square-kanban]',
  host: {
    class: 'lucide lucide-square-kanban',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M8 7v7" />
    <svg:path d="M12 7v4" />
    <svg:path d="M16 7v9" />
  `,
})
export class LucideSquareKanban {}
