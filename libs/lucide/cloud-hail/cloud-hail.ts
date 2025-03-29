import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCloudHail],svg[lucide-cloud-hail]',
  host: {
    class: 'lucide lucide-cloud-hail',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <svg:path d="M16 14v2" />
    <svg:path d="M8 14v2" />
    <svg:path d="M16 20h.01" />
    <svg:path d="M8 20h.01" />
    <svg:path d="M12 16v2" />
    <svg:path d="M12 22h.01" />
  `,
})
export class LucideCloudHail {}
