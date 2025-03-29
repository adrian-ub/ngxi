import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideNotebookPen],svg[lucide-notebook-pen]',
  host: {
    class: 'lucide lucide-notebook-pen',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"
    />
    <svg:path d="M2 6h4" />
    <svg:path d="M2 10h4" />
    <svg:path d="M2 14h4" />
    <svg:path d="M2 18h4" />
    <svg:path
      d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
    />
  `,
})
export class LucideNotebookPen {}
