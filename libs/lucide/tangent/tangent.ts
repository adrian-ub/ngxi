import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTangent],svg[lucide-tangent]',
  host: {
    class: 'lucide lucide-tangent',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="17" cy="4" r="2" />
    <svg:path d="M15.59 5.41 5.41 15.59" />
    <svg:circle cx="4" cy="17" r="2" />
    <svg:path d="M12 22s-4-9-1.5-11.5S22 12 22 12" />
  `,
})
export class LucideTangent {}
