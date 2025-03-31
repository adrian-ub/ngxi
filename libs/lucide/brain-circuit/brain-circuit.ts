import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBrainCircuit],svg[lucide-brain-circuit]',
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
    <svg:path
      d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
    />
    <svg:path d="M9 13a4.5 4.5 0 0 0 3-4" />
    <svg:path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
    <svg:path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
    <svg:path d="M6 18a4 4 0 0 1-1.967-.516" />
    <svg:path d="M12 13h4" />
    <svg:path d="M12 18h6a2 2 0 0 1 2 2v1" />
    <svg:path d="M12 8h8" />
    <svg:path d="M16 8V5a2 2 0 0 1 2-2" />
    <svg:circle cx="16" cy="13" r=".5" />
    <svg:circle cx="18" cy="3" r=".5" />
    <svg:circle cx="20" cy="21" r=".5" />
    <svg:circle cx="20" cy="8" r=".5" />
  `,
})
export class LucideBrainCircuit {
  readonly class = input('lucide lucide-brain-circuit');
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
