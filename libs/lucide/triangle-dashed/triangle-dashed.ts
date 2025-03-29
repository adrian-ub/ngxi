import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTriangleDashed],svg[lucide-triangle-dashed]',
  host: {
    class: 'lucide lucide-triangle-dashed',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10.17 4.193a2 2 0 0 1 3.666.013" />
    <svg:path d="M14 21h2" />
    <svg:path d="m15.874 7.743 1 1.732" />
    <svg:path d="m18.849 12.952 1 1.732" />
    <svg:path d="M21.824 18.18a2 2 0 0 1-1.835 2.824" />
    <svg:path d="M4.024 21a2 2 0 0 1-1.839-2.839" />
    <svg:path d="m5.136 12.952-1 1.732" />
    <svg:path d="M8 21h2" />
    <svg:path d="m8.102 7.743-1 1.732" />
  `,
})
export class LucideTriangleDashed {}
