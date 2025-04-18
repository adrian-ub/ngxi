import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinEnvelopeOIcon],svg[vaadin-envelope-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3v11h16V3zm1 4.1l3.9 2L1 12.5zm.9 5.9l4-3.5L8 10.6l2.1-1.1l4 3.5zm13.1-.5L11.1 9L15 7zm0-6.6L8 9.4L1 5.9V4h14z"></svg:path>`,
})
export class VaadinEnvelopeOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
