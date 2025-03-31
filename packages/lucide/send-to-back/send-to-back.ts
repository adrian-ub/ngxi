import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSendToBack],svg[lucide-send-to-back]',
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
  template: `<svg:rect x="14" y="14" width="8" height="8" rx="2"></svg:rect>
    <svg:rect x="2" y="2" width="8" height="8" rx="2"></svg:rect>
    <svg:path d="M7 14v1a2 2 0 0 0 2 2h1"></svg:path>
    <svg:path d="M14 7h1a2 2 0 0 1 2 2v1"></svg:path>`,
})
export class LucideSendToBack {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
