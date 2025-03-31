import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siGitlfs],svg[si-gitlfs]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Git LFS</svg:title>
    <svg:path
      d="M11.967.304L0 7.215v9.68l11.79 6.802V14.02l11.96-6.91-4.383-2.53-11.959 6.905v3.887l-2.775-1.601V9.886l11.965-6.91zM24 7.545L12.29 14.31v9.387L24 16.929V7.547z"
    />`,
})
export class SiGitlfs {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
