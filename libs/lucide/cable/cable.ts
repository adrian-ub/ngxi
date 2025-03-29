import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCable],svg[lucide-cable]',
  host: {
    class: 'lucide lucide-cable',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"
    />
    <svg:path d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9" />
    <svg:path d="M21 21v-2h-4" />
    <svg:path d="M3 5h4V3" />
    <svg:path
      d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"
    />
  `,
})
export class LucideCable {}
