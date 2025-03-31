import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTrainTrack],svg[lucide-train-track]',
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
  template: `<svg:path d="M2 17 17 2"></svg:path>
    <svg:path d="m2 14 8 8"></svg:path>
    <svg:path d="m5 11 8 8"></svg:path>
    <svg:path d="m8 8 8 8"></svg:path>
    <svg:path d="m11 5 8 8"></svg:path>
    <svg:path d="m14 2 8 8"></svg:path>
    <svg:path d="M7 22 22 7"></svg:path>`,
})
export class LucideTrainTrack {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
