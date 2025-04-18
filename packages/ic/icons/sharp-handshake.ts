import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpHandshakeIcon],svg[ic-sharp-handshake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.59 5.95l-7.05 7.04L.7 10.3l8.55-8.55L17.2 9.7l-1.42 1.42zm12.65 4.29l-8.49-8.49l-2.06 2.06l5.9 5.88l-2.83 2.83l-5.17-5.17l-6.27 6.27l1.42 1.41l5.32-5.32l.71.71l-5.32 5.32l1.42 1.41l5.32-5.32l.71.71l-5.32 5.32l1.41 1.41l5.32-5.32l.71.71L10.68 20l1.41 1.41z"></svg:path>`,
})
export class IcSharpHandshakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
