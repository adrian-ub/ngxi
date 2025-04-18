import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagPs4x3Icon],svg[flag-ps-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagPs4x30"><svg:path fill-opacity=".7" d="M-118 0h682.7v512H-118z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#flagPs4x30)" transform="translate(110.6)scale(.9375)"><svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="#000001" d="M-246 0H778v170.7H-246z"></svg:path><svg:path fill="#fff" d="M-246 170.7H778v170.6H-246z"></svg:path><svg:path fill="#090" d="M-246 341.3H778V512H-246z"></svg:path><svg:path fill="red" d="m-246 512l512-256L-246 0z"></svg:path></svg:g></svg:g>`,
})
export class FlagPs4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
