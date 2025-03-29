import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePanelBottomOpen],svg[lucide-panel-bottom-open]',
  host: {
    class: 'lucide lucide-panel-bottom-open',
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
    <svg:path d="m9 10 3-3 3 3" />
  `,
})
export class LucidePanelBottomOpen {}
