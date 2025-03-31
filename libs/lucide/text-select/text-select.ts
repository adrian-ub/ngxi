import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTextSelect],svg[lucide-text-select]',
  host: {
    role: 'img',

    '[attr.class]': 'class()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  template: `
    <svg:path d="M5 3a2 2 0 0 0-2 2" />
    <svg:path d="M19 3a2 2 0 0 1 2 2" />
    <svg:path d="M21 19a2 2 0 0 1-2 2" />
    <svg:path d="M5 21a2 2 0 0 1-2-2" />
    <svg:path d="M9 3h1" />
    <svg:path d="M9 21h1" />
    <svg:path d="M14 3h1" />
    <svg:path d="M14 21h1" />
    <svg:path d="M3 9v1" />
    <svg:path d="M21 9v1" />
    <svg:path d="M3 14v1" />
    <svg:path d="M21 14v1" />
    <svg:line x1="7" x2="15" y1="8" y2="8" />
    <svg:line x1="7" x2="17" y1="12" y2="12" />
    <svg:line x1="7" x2="13" y1="16" y2="16" />
  `,
})
export class LucideTextSelect {
  readonly class = input('lucide lucide-text-select');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly width = input('24');
  readonly height = input('24');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
