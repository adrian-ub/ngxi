import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAntenna],svg[lucide-antenna]',
  host: {
    class: 'lucide lucide-antenna',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M2 12 7 2" />
    <svg:path d="m7 12 5-10" />
    <svg:path d="m12 12 5-10" />
    <svg:path d="m17 12 5-10" />
    <svg:path d="M4.5 7h15" />
    <svg:path d="M12 16v6" />
  `,
})
export class LucideAntenna {}
