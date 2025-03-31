import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siContainerd],svg[si-containerd]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>containerd</svg:title>
    <svg:path
      d="M3.629 0v24H20.37V0zM17.59 21.208H6.421V10.604h7.812V6.692h3.346v14.516zm-7.823-7.812h4.466v5.02H9.767z"
    />`,
})
export class SiContainerd {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
