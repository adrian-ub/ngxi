import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFoldVertical],svg[lucide-fold-vertical]',
  host: {
    class: 'lucide lucide-fold-vertical',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 22v-6" />
    <svg:path d="M12 8V2" />
    <svg:path d="M4 12H2" />
    <svg:path d="M10 12H8" />
    <svg:path d="M16 12h-2" />
    <svg:path d="M22 12h-2" />
    <svg:path d="m15 19-3-3-3 3" />
    <svg:path d="m15 5-3 3-3-3" />
  `,
})
export class LucideFoldVertical {}
