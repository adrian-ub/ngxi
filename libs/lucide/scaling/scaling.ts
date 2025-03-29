import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideScaling],svg[lucide-scaling]',
  host: {
    class: 'lucide lucide-scaling',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <svg:path d="M14 15H9v-5" />
    <svg:path d="M16 3h5v5" />
    <svg:path d="M21 3 9 15" />
  `,
})
export class LucideScaling {}
