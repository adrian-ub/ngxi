import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTrainFrontTunnel],svg[lucide-train-front-tunnel]',
  host: {
    class: 'lucide lucide-train-front-tunnel',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M2 22V12a10 10 0 1 1 20 0v10" />
    <svg:path d="M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8" />
    <svg:path d="M10 15h.01" />
    <svg:path d="M14 15h.01" />
    <svg:path d="M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z" />
    <svg:path d="m9 19-2 3" />
    <svg:path d="m15 19 2 3" />
  `,
})
export class LucideTrainFrontTunnel {}
