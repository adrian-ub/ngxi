import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDraftingCompass],svg[lucide-drafting-compass]',
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
  template: `<svg:path d="m12.99 6.74 1.93 3.44"></svg:path>
    <svg:path d="M19.136 12a10 10 0 0 1-14.271 0"></svg:path>
    <svg:path d="m21 21-2.16-3.84"></svg:path>
    <svg:path d="m3 21 8.02-14.26"></svg:path>
    <svg:circle cx="12" cy="5" r="2"></svg:circle>`,
})
export class LucideDraftingCompass {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
