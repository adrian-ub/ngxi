import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWholeWord],svg[lucide-whole-word]',
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
  template: `<svg:circle cx="7" cy="12" r="3"></svg:circle>
    <svg:path d="M10 9v6"></svg:path>
    <svg:circle cx="17" cy="12" r="3"></svg:circle>
    <svg:path d="M14 7v8"></svg:path>
    <svg:path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"></svg:path>`,
})
export class LucideWholeWord {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
