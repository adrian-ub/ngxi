import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWorkflow],svg[lucide-workflow]',
  host: {
    class: 'lucide lucide-workflow',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="8" height="8" x="3" y="3" rx="2" />
    <svg:path d="M7 11v4a2 2 0 0 0 2 2h4" />
    <svg:rect width="8" height="8" x="13" y="13" rx="2" />
  `,
})
export class LucideWorkflow {}
