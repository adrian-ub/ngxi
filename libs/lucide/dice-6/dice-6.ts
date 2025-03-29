import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDice6],svg[lucide-dice-6]',
  host: {
    class: 'lucide lucide-dice-6',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <svg:path d="M16 8h.01" />
    <svg:path d="M16 12h.01" />
    <svg:path d="M16 16h.01" />
    <svg:path d="M8 8h.01" />
    <svg:path d="M8 12h.01" />
    <svg:path d="M8 16h.01" />
  `,
})
export class LucideDice6 {}
