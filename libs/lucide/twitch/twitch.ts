import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTwitch],svg[lucide-twitch]',
  host: {
    class: 'lucide lucide-twitch',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" /> `,
})
export class LucideTwitch {}
