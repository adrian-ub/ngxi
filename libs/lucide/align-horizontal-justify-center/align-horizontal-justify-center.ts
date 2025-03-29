import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideAlignHorizontalJustifyCenter],svg[lucide-align-horizontal-justify-center]',
  host: {
    class: 'lucide lucide-align-horizontal-justify-center',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="6" height="14" x="2" y="5" rx="2" />
    <svg:rect width="6" height="10" x="16" y="7" rx="2" />
    <svg:path d="M12 2v20" />
  `,
})
export class LucideAlignHorizontalJustifyCenter {}
