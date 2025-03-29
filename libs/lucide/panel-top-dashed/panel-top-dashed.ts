import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePanelTopDashed],svg[lucide-panel-top-dashed]',
  host: {
    class: 'lucide lucide-panel-top-dashed',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M14 9h1" />
    <svg:path d="M19 9h2" />
    <svg:path d="M3 9h2" />
    <svg:path d="M9 9h1" />
  `,
})
export class LucidePanelTopDashed {}
