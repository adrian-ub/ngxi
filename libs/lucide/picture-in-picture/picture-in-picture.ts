import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePictureInPicture],svg[lucide-picture-in-picture]',
  host: {
    class: 'lucide lucide-picture-in-picture',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M2 10h6V4" />
    <svg:path d="m2 4 6 6" />
    <svg:path d="M21 10V7a2 2 0 0 0-2-2h-7" />
    <svg:path d="M3 14v2a2 2 0 0 0 2 2h3" />
    <svg:rect x="12" y="14" width="10" height="7" rx="1" />
  `,
})
export class LucidePictureInPicture {}
