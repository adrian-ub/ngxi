import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowUpFromDot],svg[lucide-arrow-up-from-dot]',
  host: {
    class: 'lucide lucide-arrow-up-from-dot',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m5 9 7-7 7 7" />
    <svg:path d="M12 16V2" />
    <svg:circle cx="12" cy="21" r="1" />
  `,
})
export class LucideArrowUpFromDot {}
