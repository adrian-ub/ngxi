import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRadioReceiver],svg[lucide-radio-receiver]',
  host: {
    class: 'lucide lucide-radio-receiver',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M5 16v2" />
    <svg:path d="M19 16v2" />
    <svg:rect width="20" height="8" x="2" y="8" rx="2" />
    <svg:path d="M18 12h.01" />
  `,
})
export class LucideRadioReceiver {}
