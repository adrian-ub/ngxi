import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDice1],svg[lucide-dice-1]',
  host: {
    class: 'lucide lucide-dice-1',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <svg:path d="M12 12h.01" />
  `,
})
export class LucideDice1 {}
