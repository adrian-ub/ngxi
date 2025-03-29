import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFlipHorizontal2],svg[lucide-flip-horizontal-2]',
  host: {
    class: 'lucide lucide-flip-horizontal-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m3 7 5 5-5 5V7" />
    <svg:path d="m21 7-5 5 5 5V7" />
    <svg:path d="M12 20v2" />
    <svg:path d="M12 14v2" />
    <svg:path d="M12 8v2" />
    <svg:path d="M12 2v2" />
  `,
})
export class LucideFlipHorizontal2 {}
