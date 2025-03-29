import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowDownToDot],svg[lucide-arrow-down-to-dot]',
  host: {
    class: 'lucide lucide-arrow-down-to-dot',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 2v14" />
    <svg:path d="m19 9-7 7-7-7" />
    <svg:circle cx="12" cy="21" r="1" />
  `,
})
export class LucideArrowDownToDot {}
