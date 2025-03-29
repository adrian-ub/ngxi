import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePanelBottomClose],svg[lucide-panel-bottom-close]',
  host: {
    class: 'lucide lucide-panel-bottom-close',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M3 15h18" />
    <svg:path d="m15 8-3 3-3-3" />
  `,
})
export class LucidePanelBottomClose {}
