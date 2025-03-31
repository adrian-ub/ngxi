import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWebhookOff],svg[lucide-webhook-off]',
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
  template: `<svg:path
      d="M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15"
    ></svg:path>
    <svg:path d="M9 3.4a4 4 0 0 1 6.52.66"></svg:path>
    <svg:path d="m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05"></svg:path>
    <svg:path d="M20.3 20.3a4 4 0 0 1-2.3.7"></svg:path>
    <svg:path d="M18.6 13a4 4 0 0 1 3.357 3.414"></svg:path>
    <svg:path d="m12 6 .6 1"></svg:path>
    <svg:path d="m2 2 20 20"></svg:path>`,
})
export class LucideWebhookOff {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
