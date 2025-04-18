import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSpeakerUsb20RegularIcon],svg[fluent-speaker-usb-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.316 2.273c.64-.594 1.68-.14 1.68.733v13.988c0 .873-1.04 1.326-1.68.733l-3.872-3.594a.5.5 0 0 0-.34-.133H3.496a1.5 1.5 0 0 1-1.5-1.5v-5a1.5 1.5 0 0 1 1.5-1.5h2.608a.5.5 0 0 0 .34-.134zm.68.733L7.124 6.599a1.5 1.5 0 0 1-1.02.4H3.496a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h2.608a1.5 1.5 0 0 1 1.02.401l3.872 3.594zM14 8V6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 1 1v2.206a1 1 0 0 1-.191.588l-1.309 1.8V15a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1.406l-1.313-1.833A1 1 0 0 1 13 11.18V9a1 1 0 0 1 1-1m1 0h2V6h-2z"></svg:path>`,
})
export class FluentSpeakerUsb20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
