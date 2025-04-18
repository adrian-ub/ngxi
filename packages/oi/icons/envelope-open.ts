import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiEnvelopeOpenIcon],svg[oi-envelope-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0L0 2v6h8V2zm0 1.13l3 1.5v1.88l-3 1.5l-3-1.5V2.63zM2 3.01v1l2 1l2-1v-1z"></svg:path>`,
})
export class OiEnvelopeOpenIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
