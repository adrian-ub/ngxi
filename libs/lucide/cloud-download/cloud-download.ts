import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCloudDownload],svg[lucide-cloud-download]',
  host: {
    class: 'lucide lucide-cloud-download',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 13v8l-4-4" />
    <svg:path d="m12 21 4-4" />
    <svg:path
      d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"
    />
  `,
})
export class LucideCloudDownload {}
