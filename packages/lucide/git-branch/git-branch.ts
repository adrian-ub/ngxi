import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGitBranch],svg[lucide-git-branch]',
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
  template: `<svg:line x1="6" x2="6" y1="3" y2="15"></svg:line>
    <svg:circle cx="18" cy="6" r="3"></svg:circle>
    <svg:circle cx="6" cy="18" r="3"></svg:circle>
    <svg:path d="M18 9a9 9 0 0 1-9 9"></svg:path>`,
})
export class LucideGitBranch {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
