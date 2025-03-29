import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLogIn],svg[lucide-log-in]',
  host: {
    class: 'lucide lucide-log-in',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <svg:polyline points="10 17 15 12 10 7" />
    <svg:line x1="15" x2="3" y1="12" y2="12" />
  `,
})
export class LucideLogIn {}
