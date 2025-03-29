import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGift],svg[lucide-gift]',
  host: {
    class: 'lucide lucide-gift',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect x="3" y="8" width="18" height="4" rx="1" />
    <svg:path d="M12 8v13" />
    <svg:path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
    <svg:path
      d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"
    />
  `,
})
export class LucideGift {}
