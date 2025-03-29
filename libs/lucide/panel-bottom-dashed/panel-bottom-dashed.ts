import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePanelBottomDashed],svg[lucide-panel-bottom-dashed]',
  host: {
    class: 'lucide lucide-panel-bottom-dashed',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M14 15h1" />
    <svg:path d="M19 15h2" />
    <svg:path d="M3 15h2" />
    <svg:path d="M9 15h1" />
  `,
})
export class LucidePanelBottomDashed {}
