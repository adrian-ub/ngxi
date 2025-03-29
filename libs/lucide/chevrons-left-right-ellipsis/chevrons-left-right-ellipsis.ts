import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideChevronsLeftRightEllipsis],svg[lucide-chevrons-left-right-ellipsis]',
  host: {
    class: 'lucide lucide-chevrons-left-right-ellipsis',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m18 8 4 4-4 4" />
    <svg:path d="m6 8-4 4 4 4" />
    <svg:path d="M8 12h.01" />
    <svg:path d="M12 12h.01" />
    <svg:path d="M16 12h.01" />
  `,
})
export class LucideChevronsLeftRightEllipsis {}
