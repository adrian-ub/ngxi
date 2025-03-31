import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTriangleDashed],svg[lucide-triangle-dashed]',
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
  template: `<svg:path d="M10.17 4.193a2 2 0 0 1 3.666.013"></svg:path>
    <svg:path d="M14 21h2"></svg:path>
    <svg:path d="m15.874 7.743 1 1.732"></svg:path>
    <svg:path d="m18.849 12.952 1 1.732"></svg:path>
    <svg:path d="M21.824 18.18a2 2 0 0 1-1.835 2.824"></svg:path>
    <svg:path d="M4.024 21a2 2 0 0 1-1.839-2.839"></svg:path>
    <svg:path d="m5.136 12.952-1 1.732"></svg:path>
    <svg:path d="M8 21h2"></svg:path>
    <svg:path d="m8.102 7.743-1 1.732"></svg:path>`,
})
export class LucideTriangleDashed {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
