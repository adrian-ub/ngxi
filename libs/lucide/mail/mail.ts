import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMail],svg[lucide-mail]',
  host: {
    class: 'lucide lucide-mail',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="20" height="16" x="2" y="4" rx="2" />
    <svg:path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  `,
})
export class LucideMail {}
