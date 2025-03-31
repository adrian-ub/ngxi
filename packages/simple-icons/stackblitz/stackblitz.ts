import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siStackblitz],svg[si-stackblitz]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>StackBlitz</svg:title>
    <svg:path
      d="M10.797 14.182H3.635L16.728 0l-3.525 9.818h7.162L7.272 24l3.524-9.818Z"
    />`,
})
export class SiStackblitz {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
