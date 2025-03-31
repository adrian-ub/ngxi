import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGitPullRequest],svg[lucide-git-pull-request]',
  host: {
    role: 'img',

    '[attr.class]': 'class()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  template: `
    <svg:circle cx="18" cy="18" r="3" />
    <svg:circle cx="6" cy="6" r="3" />
    <svg:path d="M13 6h3a2 2 0 0 1 2 2v7" />
    <svg:line x1="6" x2="6" y1="9" y2="21" />
  `,
})
export class LucideGitPullRequest {
  readonly class = input('lucide lucide-git-pull-request');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly width = input('24');
  readonly height = input('24');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
