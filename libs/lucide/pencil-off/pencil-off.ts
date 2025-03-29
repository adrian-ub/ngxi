import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePencilOff],svg[lucide-pencil-off]',
  host: {
    class: 'lucide lucide-pencil-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"
    />
    <svg:path
      d="m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"
    />
    <svg:path d="m15 5 4 4" />
    <svg:path d="m2 2 20 20" />
  `,
})
export class LucidePencilOff {}
