import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMove],svg[lucide-move]',
  host: {
    class: 'lucide lucide-move',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 2v20" />
    <svg:path d="m15 19-3 3-3-3" />
    <svg:path d="m19 9 3 3-3 3" />
    <svg:path d="M2 12h20" />
    <svg:path d="m5 9-3 3 3 3" />
    <svg:path d="m9 5 3-3 3 3" />
  `,
})
export class LucideMove {}
