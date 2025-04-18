import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSendIcon],svg[ic-sharp-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z"></svg:path>`,
})
export class IcSharpSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
