import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCloudUpload],svg[lucide-cloud-upload]',
  host: {
    class: 'lucide lucide-cloud-upload',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 13v8" />
    <svg:path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <svg:path d="m8 17 4-4 4 4" />
  `,
})
export class LucideCloudUpload {}
