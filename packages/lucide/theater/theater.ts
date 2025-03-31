import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTheater],svg[lucide-theater]',
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
  template: `<svg:path d="M2 10s3-3 3-8"></svg:path>
    <svg:path d="M22 10s-3-3-3-8"></svg:path>
    <svg:path d="M10 2c0 4.4-3.6 8-8 8"></svg:path>
    <svg:path d="M14 2c0 4.4 3.6 8 8 8"></svg:path>
    <svg:path d="M2 10s2 2 2 5"></svg:path>
    <svg:path d="M22 10s-2 2-2 5"></svg:path>
    <svg:path d="M8 15h8"></svg:path>
    <svg:path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"></svg:path>
    <svg:path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"></svg:path>`,
})
export class LucideTheater {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
