import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSpeaker],svg[lucide-speaker]',
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
  template: `<svg:rect width="16" height="20" x="4" y="2" rx="2"></svg:rect>
    <svg:path d="M12 6h.01"></svg:path>
    <svg:circle cx="12" cy="14" r="4"></svg:circle>
    <svg:path d="M12 14h.01"></svg:path>`,
})
export class LucideSpeaker {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
