import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileImage],svg[lucide-file-image]',
  host: {
    class: 'lucide lucide-file-image',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <svg:path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <svg:circle cx="10" cy="12" r="2" />
    <svg:path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22" />
  `,
})
export class LucideFileImage {}
