import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideReplyAll],svg[lucide-reply-all]',
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
  template: `<svg:polyline points="7 17 2 12 7 7"></svg:polyline>
    <svg:polyline points="12 17 7 12 12 7"></svg:polyline>
    <svg:path d="M22 18v-2a4 4 0 0 0-4-4H7"></svg:path>`,
})
export class LucideReplyAll {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
