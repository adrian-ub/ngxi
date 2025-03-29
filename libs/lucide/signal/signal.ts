import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSignal],svg[lucide-signal]',
  host: {
    class: 'lucide lucide-signal',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M2 20h.01" />
    <svg:path d="M7 20v-4" />
    <svg:path d="M12 20v-8" />
    <svg:path d="M17 20V8" />
    <svg:path d="M22 4v16" />
  `,
})
export class LucideSignal {}
