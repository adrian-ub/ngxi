import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siSourcehut],svg[si-sourcehut]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>SourceHut</svg:title>
    <svg:path
      d="M12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0Zm0 21.677A9.675 9.675 0 0 1 2.323 12 9.675 9.675 0 0 1 12 2.323 9.675 9.675 0 0 1 21.677 12 9.675 9.675 0 0 1 12 21.677Z"
    />`,
})
export class SiSourcehut {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
