import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLayoutPanelTop],svg[lucide-layout-panel-top]',
  host: {
    class: 'lucide lucide-layout-panel-top',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="7" x="3" y="3" rx="1" />
    <svg:rect width="7" height="7" x="3" y="14" rx="1" />
    <svg:rect width="7" height="7" x="14" y="14" rx="1" />
  `,
})
export class LucideLayoutPanelTop {}
