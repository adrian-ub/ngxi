import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTrainFront],svg[lucide-train-front]',
  host: {
    class: 'lucide lucide-train-front',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M8 3.1V7a4 4 0 0 0 8 0V3.1" />
    <svg:path d="m9 15-1-1" />
    <svg:path d="m15 15 1-1" />
    <svg:path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" />
    <svg:path d="m8 19-2 3" />
    <svg:path d="m16 19 2 3" />
  `,
})
export class LucideTrainFront {}
