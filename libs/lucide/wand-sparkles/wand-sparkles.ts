import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWandSparkles],svg[lucide-wand-sparkles]',
  host: {
    class: 'lucide lucide-wand-sparkles',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"
    />
    <svg:path d="m14 7 3 3" />
    <svg:path d="M5 6v4" />
    <svg:path d="M19 14v4" />
    <svg:path d="M10 2v2" />
    <svg:path d="M7 8H3" />
    <svg:path d="M21 16h-4" />
    <svg:path d="M11 3H9" />
  `,
})
export class LucideWandSparkles {}
