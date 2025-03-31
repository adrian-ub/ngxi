import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideNotepadTextDashed],svg[lucide-notepad-text-dashed]',
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
  template: `<svg:path d="M8 2v4"></svg:path>
    <svg:path d="M12 2v4"></svg:path>
    <svg:path d="M16 2v4"></svg:path>
    <svg:path d="M16 4h2a2 2 0 0 1 2 2v2"></svg:path>
    <svg:path d="M20 12v2"></svg:path>
    <svg:path d="M20 18v2a2 2 0 0 1-2 2h-1"></svg:path>
    <svg:path d="M13 22h-2"></svg:path>
    <svg:path d="M7 22H6a2 2 0 0 1-2-2v-2"></svg:path>
    <svg:path d="M4 14v-2"></svg:path>
    <svg:path d="M4 8V6a2 2 0 0 1 2-2h2"></svg:path>
    <svg:path d="M8 10h6"></svg:path>
    <svg:path d="M8 14h8"></svg:path>
    <svg:path d="M8 18h5"></svg:path>`,
})
export class LucideNotepadTextDashed {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
