import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMartini],svg[lucide-martini]',
  host: {
    class: 'lucide lucide-martini',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M8 22h8" />
    <svg:path d="M12 11v11" />
    <svg:path d="m19 3-7 8-7-8Z" />
  `,
})
export class LucideMartini {}
