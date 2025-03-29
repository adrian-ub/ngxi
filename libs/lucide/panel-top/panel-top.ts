import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePanelTop],svg[lucide-panel-top]',
  host: {
    class: 'lucide lucide-panel-top',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M3 9h18" />
  `,
})
export class LucidePanelTop {}
