import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGitBranchPlus],svg[lucide-git-branch-plus]',
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
  template: `<svg:path d="M6 3v12"></svg:path>
    <svg:path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></svg:path>
    <svg:path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></svg:path>
    <svg:path d="M15 6a9 9 0 0 0-9 9"></svg:path>
    <svg:path d="M18 15v6"></svg:path>
    <svg:path d="M21 18h-6"></svg:path>`,
})
export class LucideGitBranchPlus {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
