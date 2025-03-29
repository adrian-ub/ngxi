import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUmbrella],svg[lucide-umbrella]',
  host: {
    class: 'lucide lucide-umbrella',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M22 12a10.06 10.06 1 0 0-20 0Z" />
    <svg:path d="M12 12v8a2 2 0 0 0 4 0" />
    <svg:path d="M12 2v1" />
  `,
})
export class LucideUmbrella {}
