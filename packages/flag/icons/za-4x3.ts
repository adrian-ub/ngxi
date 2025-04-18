import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagZa4x3Icon],svg[flag-za-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagZa4x30"><svg:path fill-opacity=".7" d="M-71.9 0h682.7v512H-71.9z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#flagZa4x30)" transform="translate(67.4)scale(.93748)"><svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="#000001" d="M-71.9 407.8V104.4L154 256.1z"></svg:path><svg:path fill="#000c8a" d="m82.2 512.1l253.6-170.6H696V512H82.2z"></svg:path><svg:path fill="#e1392d" d="M66 0h630v170.8H335.7S69.3-1.7 66 0"></svg:path><svg:path fill="#ffb915" d="M-71.9 64v40.4L154 256L-72 407.8v40.3l284.5-192z"></svg:path><svg:path fill="#007847" d="M-71.9 64V0h95l301.2 204h371.8v104.2H324.3L23 512h-94.9v-63.9l284.4-192L-71.8 64z"></svg:path><svg:path fill="#fff" d="M23 0h59.2l253.6 170.7H696V204H324.3zm0 512.1h59.2l253.6-170.6H696v-33.2H324.3L23 512z"></svg:path></svg:g></svg:g>`,
})
export class FlagZa4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
