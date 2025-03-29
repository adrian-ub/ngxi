import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePanelRightDashed],svg[lucide-panel-right-dashed]',
  host: {
    class: 'lucide lucide-panel-right-dashed',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M15 14v1" />
    <svg:path d="M15 19v2" />
    <svg:path d="M15 3v2" />
    <svg:path d="M15 9v1" />
  `,
})
export class LucidePanelRightDashed {}
