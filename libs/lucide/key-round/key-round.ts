import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideKeyRound],svg[lucide-key-round]',
  host: {
    class: 'lucide lucide-key-round',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
    />
    <svg:circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
  `,
})
export class LucideKeyRound {}
