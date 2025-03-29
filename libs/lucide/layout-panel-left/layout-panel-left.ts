import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLayoutPanelLeft],svg[lucide-layout-panel-left]',
  host: {
    class: 'lucide lucide-layout-panel-left',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="7" height="18" x="3" y="3" rx="1" />
    <svg:rect width="7" height="7" x="14" y="3" rx="1" />
    <svg:rect width="7" height="7" x="14" y="14" rx="1" />
  `,
})
export class LucideLayoutPanelLeft {}
