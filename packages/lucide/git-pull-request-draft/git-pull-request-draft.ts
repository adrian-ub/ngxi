import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGitPullRequestDraft],svg[lucide-git-pull-request-draft]',
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
  template: `<svg:circle cx="18" cy="18" r="3"></svg:circle>
    <svg:circle cx="6" cy="6" r="3"></svg:circle>
    <svg:path d="M18 6V5"></svg:path>
    <svg:path d="M18 11v-1"></svg:path>
    <svg:line x1="6" x2="6" y1="9" y2="21"></svg:line>`,
})
export class LucideGitPullRequestDraft {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
