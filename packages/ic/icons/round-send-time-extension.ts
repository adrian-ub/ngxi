import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundSendTimeExtensionIcon],svg[ic-round-send-time-extension-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6c0-1.1-.9-2-2-2h-4a2.5 2.5 0 0 0-5 0H5.01c-1.1 0-2 .9-2 2v3.8C5.7 9.8 6 11.96 6 12.5s-.29 2.7-3 2.7V19c0 1.1.9 2 2 2h3.8c0-2.16 1.37-2.78 2.2-2.94v-9.3l9 4.5z"></svg:path><svg:path fill="currentColor" d="M13 12v4l4 1l-4 1v4l10-5z"></svg:path>`,
})
export class IcRoundSendTimeExtensionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
