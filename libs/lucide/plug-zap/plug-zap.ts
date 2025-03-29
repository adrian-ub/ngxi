import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePlugZap],svg[lucide-plug-zap]',
  host: {
    class: 'lucide lucide-plug-zap',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"
    />
    <svg:path d="m2 22 3-3" />
    <svg:path d="M7.5 13.5 10 11" />
    <svg:path d="M10.5 16.5 13 14" />
    <svg:path d="m18 3-4 4h6l-4 4" />
  `,
})
export class LucidePlugZap {}
