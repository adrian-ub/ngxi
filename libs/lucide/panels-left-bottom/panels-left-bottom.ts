import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePanelsLeftBottom],svg[lucide-panels-left-bottom]',
  host: {
    class: 'lucide lucide-panels-left-bottom',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M9 3v18" />
    <svg:path d="M9 15h12" />
  `,
})
export class LucidePanelsLeftBottom {}
