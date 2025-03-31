import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWand],svg[lucide-wand]',
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
  template: `<svg:path d="M15 4V2"></svg:path>
    <svg:path d="M15 16v-2"></svg:path>
    <svg:path d="M8 9h2"></svg:path>
    <svg:path d="M20 9h2"></svg:path>
    <svg:path d="M17.8 11.8 19 13"></svg:path>
    <svg:path d="M15 9h.01"></svg:path>
    <svg:path d="M17.8 6.2 19 5"></svg:path>
    <svg:path d="m3 21 9-9"></svg:path>
    <svg:path d="M12.2 6.2 11 5"></svg:path>`,
})
export class LucideWand {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
