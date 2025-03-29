import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePanelLeftDashed],svg[lucide-panel-left-dashed]',
  host: {
    class: 'lucide lucide-panel-left-dashed',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M9 14v1" />
    <svg:path d="M9 19v2" />
    <svg:path d="M9 3v2" />
    <svg:path d="M9 9v1" />
  `,
})
export class LucidePanelLeftDashed {}
