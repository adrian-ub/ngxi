import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGitFork],svg[lucide-git-fork]',
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
  template: `<svg:circle cx="12" cy="18" r="3"></svg:circle>
    <svg:circle cx="6" cy="6" r="3"></svg:circle>
    <svg:circle cx="18" cy="6" r="3"></svg:circle>
    <svg:path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></svg:path>
    <svg:path d="M12 12v3"></svg:path>`,
})
export class LucideGitFork {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
