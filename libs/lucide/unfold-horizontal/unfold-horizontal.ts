import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUnfoldHorizontal],svg[lucide-unfold-horizontal]',
  host: {
    class: 'lucide lucide-unfold-horizontal',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M16 12h6" />
    <svg:path d="M8 12H2" />
    <svg:path d="M12 2v2" />
    <svg:path d="M12 8v2" />
    <svg:path d="M12 14v2" />
    <svg:path d="M12 20v2" />
    <svg:path d="m19 15 3-3-3-3" />
    <svg:path d="m5 9-3 3 3 3" />
  `,
})
export class LucideUnfoldHorizontal {}
