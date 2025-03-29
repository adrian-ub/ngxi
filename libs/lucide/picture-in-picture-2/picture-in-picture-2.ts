import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePictureInPicture2],svg[lucide-picture-in-picture-2]',
  host: {
    class: 'lucide lucide-picture-in-picture-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4" />
    <svg:rect width="10" height="7" x="12" y="13" rx="2" />
  `,
})
export class LucidePictureInPicture2 {}
