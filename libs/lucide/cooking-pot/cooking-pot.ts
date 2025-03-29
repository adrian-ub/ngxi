import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCookingPot],svg[lucide-cooking-pot]',
  host: {
    class: 'lucide lucide-cooking-pot',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M2 12h20" />
    <svg:path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
    <svg:path d="m4 8 16-4" />
    <svg:path
      d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"
    />
  `,
})
export class LucideCookingPot {}
