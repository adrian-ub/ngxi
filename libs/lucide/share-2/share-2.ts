import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideShare2],svg[lucide-share-2]',
  host: {
    class: 'lucide lucide-share-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="18" cy="5" r="3" />
    <svg:circle cx="6" cy="12" r="3" />
    <svg:circle cx="18" cy="19" r="3" />
    <svg:line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
    <svg:line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
  `,
})
export class LucideShare2 {}
