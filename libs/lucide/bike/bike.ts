import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBike],svg[lucide-bike]',
  host: {
    class: 'lucide lucide-bike',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="18.5" cy="17.5" r="3.5" />
    <svg:circle cx="5.5" cy="17.5" r="3.5" />
    <svg:circle cx="15" cy="5" r="1" />
    <svg:path d="M12 17.5V14l-3-3 4-3 2 3h2" />
  `,
})
export class LucideBike {}
