import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDisc2],svg[lucide-disc-2]',
  host: {
    class: 'lucide lucide-disc-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:circle cx="12" cy="12" r="4" />
    <svg:path d="M12 12h.01" />
  `,
})
export class LucideDisc2 {}
