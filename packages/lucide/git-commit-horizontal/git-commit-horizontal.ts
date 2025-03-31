import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGitCommitHorizontal],svg[lucide-git-commit-horizontal]',
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
  template: `<svg:circle cx="12" cy="12" r="3"></svg:circle>
    <svg:line x1="3" x2="9" y1="12" y2="12"></svg:line>
    <svg:line x1="15" x2="21" y1="12" y2="12"></svg:line>`,
})
export class LucideGitCommitHorizontal {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
