import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWineOff],svg[lucide-wine-off]',
  host: {
    class: 'lucide lucide-wine-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M8 22h8" />
    <svg:path d="M7 10h3m7 0h-1.343" />
    <svg:path d="M12 15v7" />
    <svg:path
      d="M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"
    />
    <svg:line x1="2" x2="22" y1="2" y2="22" />
  `,
})
export class LucideWineOff {}
