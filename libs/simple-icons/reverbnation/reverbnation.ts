import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siReverbnation],svg[si-reverbnation]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>ReverbNation</svg:title>
    <svg:path
      d="M24 9.324l-9.143-.03L11.971.57 9.143 9.294 0 9.324h.031l7.367 5.355-2.855 8.749h.029l7.459-5.386 7.396 5.386-2.855-8.73L24 9.315"
    />`,
})
export class SiReverbnation {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
