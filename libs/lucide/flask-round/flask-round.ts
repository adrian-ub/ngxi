import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFlaskRound],svg[lucide-flask-round]',
  host: {
    class: 'lucide lucide-flask-round',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 2v6.292a7 7 0 1 0 4 0V2" />
    <svg:path d="M5 15h14" />
    <svg:path d="M8.5 2h7" />
  `,
})
export class LucideFlaskRound {}
