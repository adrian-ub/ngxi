import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideVibrate],svg[lucide-vibrate]',
  host: {
    class: 'lucide lucide-vibrate',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m2 8 2 2-2 2 2 2-2 2" />
    <svg:path d="m22 8-2 2 2 2-2 2 2 2" />
    <svg:rect width="8" height="14" x="8" y="5" rx="1" />
  `,
})
export class LucideVibrate {}
