import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTrello],svg[lucide-trello]',
  host: {
    class: 'lucide lucide-trello',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <svg:rect width="3" height="9" x="7" y="7" />
    <svg:rect width="3" height="5" x="14" y="7" />
  `,
})
export class LucideTrello {}
