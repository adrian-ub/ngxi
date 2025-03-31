import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCaptionsOff],svg[lucide-captions-off]',
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
  template: `<svg:path d="M10.5 5H19a2 2 0 0 1 2 2v8.5"></svg:path>
    <svg:path d="M17 11h-.5"></svg:path>
    <svg:path d="M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"></svg:path>
    <svg:path d="m2 2 20 20"></svg:path>
    <svg:path d="M7 11h4"></svg:path>
    <svg:path d="M7 15h2.5"></svg:path>`,
})
export class LucideCaptionsOff {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
