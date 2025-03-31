import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideBriefcaseConveyorBelt],svg[lucide-briefcase-conveyor-belt]',
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
    <svg:path d="M10 20v2" />
    <svg:path d="M14 20v2" />
    <svg:path d="M18 20v2" />
    <svg:path d="M21 20H3" />
    <svg:path d="M6 20v2" />
    <svg:path d="M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" />
    <svg:rect x="4" y="6" width="16" height="10" rx="2" />
  `,
})
export class LucideBriefcaseConveyorBelt {
  readonly class = input('lucide lucide-briefcase-conveyor-belt');
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
