import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCloudSun],svg[lucide-cloud-sun]',
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
  template: `<svg:path d="M12 2v2"></svg:path>
    <svg:path d="m4.93 4.93 1.41 1.41"></svg:path>
    <svg:path d="M20 12h2"></svg:path>
    <svg:path d="m19.07 4.93-1.41 1.41"></svg:path>
    <svg:path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></svg:path>
    <svg:path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></svg:path>`,
})
export class LucideCloudSun {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
