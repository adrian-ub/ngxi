import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBriefcaseMedical],svg[lucide-briefcase-medical]',
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
  template: `<svg:path d="M12 11v4"></svg:path>
    <svg:path d="M14 13h-4"></svg:path>
    <svg:path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></svg:path>
    <svg:path d="M18 6v14"></svg:path>
    <svg:path d="M6 6v14"></svg:path>
    <svg:rect width="20" height="14" x="2" y="6" rx="2"></svg:rect>`,
})
export class LucideBriefcaseMedical {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
