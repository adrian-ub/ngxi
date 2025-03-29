import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLibrary],svg[lucide-library]',
  host: {
    class: 'lucide lucide-library',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m16 6 4 14" />
    <svg:path d="M12 6v14" />
    <svg:path d="M8 8v12" />
    <svg:path d="M4 4v16" />
  `,
})
export class LucideLibrary {}
