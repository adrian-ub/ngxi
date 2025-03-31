import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePlug2],svg[lucide-plug-2]',
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
  template: `<svg:path d="M9 2v6"></svg:path>
    <svg:path d="M15 2v6"></svg:path>
    <svg:path d="M12 17v5"></svg:path>
    <svg:path d="M5 8h14"></svg:path>
    <svg:path d="M6 11V8h12v3a6 6 0 1 1-12 0Z"></svg:path>`,
})
export class LucidePlug2 {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
