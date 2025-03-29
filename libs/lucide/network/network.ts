import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideNetwork],svg[lucide-network]',
  host: {
    class: 'lucide lucide-network',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect x="16" y="16" width="6" height="6" rx="1" />
    <svg:rect x="2" y="16" width="6" height="6" rx="1" />
    <svg:rect x="9" y="2" width="6" height="6" rx="1" />
    <svg:path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
    <svg:path d="M12 12V8" />
  `,
})
export class LucideNetwork {}
