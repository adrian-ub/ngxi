import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideImagePlus],svg[lucide-image-plus]',
  host: {
    class: 'lucide lucide-image-plus',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M16 5h6" />
    <svg:path d="M19 2v6" />
    <svg:path
      d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"
    />
    <svg:path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    <svg:circle cx="9" cy="9" r="2" />
  `,
})
export class LucideImagePlus {}
