import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePictureInPicture],svg[lucide-picture-in-picture]',
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  template: `<svg:path d="M2 10h6V4"></svg:path>
    <svg:path d="m2 4 6 6"></svg:path>
    <svg:path d="M21 10V7a2 2 0 0 0-2-2h-7"></svg:path>
    <svg:path d="M3 14v2a2 2 0 0 0 2 2h3"></svg:path>
    <svg:rect x="12" y="14" width="10" height="7" rx="1"></svg:rect>`,
})
export class LucidePictureInPicture {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
