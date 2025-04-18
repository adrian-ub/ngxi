import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiEnvelopeClosedIcon],svg[oi-envelope-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1v1l4 2l4-2V1zm0 2v4h8V3L4 5z"></svg:path>`,
})
export class OiEnvelopeClosedIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
