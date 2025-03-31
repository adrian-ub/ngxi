import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideListVideo],svg[lucide-list-video]',
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
  template: `<svg:path d="M12 12H3"></svg:path>
    <svg:path d="M16 6H3"></svg:path>
    <svg:path d="M12 18H3"></svg:path>
    <svg:path d="m16 12 5 3-5 3v-6Z"></svg:path>`,
})
export class LucideListVideo {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
