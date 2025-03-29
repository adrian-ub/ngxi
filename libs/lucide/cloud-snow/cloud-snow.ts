import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCloudSnow],svg[lucide-cloud-snow]',
  host: {
    class: 'lucide lucide-cloud-snow',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <svg:path d="M8 15h.01" />
    <svg:path d="M8 19h.01" />
    <svg:path d="M12 17h.01" />
    <svg:path d="M12 21h.01" />
    <svg:path d="M16 15h.01" />
    <svg:path d="M16 19h.01" />
  `,
})
export class LucideCloudSnow {}
