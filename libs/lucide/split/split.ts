import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSplit],svg[lucide-split]',
  host: {
    class: 'lucide lucide-split',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M16 3h5v5" />
    <svg:path d="M8 3H3v5" />
    <svg:path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" />
    <svg:path d="m15 9 6-6" />
  `,
})
export class LucideSplit {}
