import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMic],svg[lucide-mic]',
  host: {
    class: 'lucide lucide-mic',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
    <svg:path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <svg:line x1="12" x2="12" y1="19" y2="22" />
  `,
})
export class LucideMic {}
