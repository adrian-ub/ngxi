import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGitPullRequestArrow],svg[lucide-git-pull-request-arrow]',
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
  template: `<svg:circle cx="5" cy="6" r="3"></svg:circle>
    <svg:path d="M5 9v12"></svg:path>
    <svg:circle cx="19" cy="18" r="3"></svg:circle>
    <svg:path d="m15 9-3-3 3-3"></svg:path>
    <svg:path d="M12 6h5a2 2 0 0 1 2 2v7"></svg:path>`,
})
export class LucideGitPullRequestArrow {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
