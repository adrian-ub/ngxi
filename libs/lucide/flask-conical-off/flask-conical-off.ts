import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFlaskConicalOff],svg[lucide-flask-conical-off]',
  host: {
    class: 'lucide lucide-flask-conical-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 2v2.343" />
    <svg:path d="M14 2v6.343" />
    <svg:path d="m2 2 20 20" />
    <svg:path d="M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563" />
    <svg:path d="M6.453 15H15" />
    <svg:path d="M8.5 2h7" />
  `,
})
export class LucideFlaskConicalOff {}
