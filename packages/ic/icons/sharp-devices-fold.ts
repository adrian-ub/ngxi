import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpDevicesFoldIcon],svg[ic-sharp-devices-fold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3V-.03l-7 3V21h12V3zm3 16h-5.33L17 18V5h3zM2 3h2v2H2zm0 16h2v2H2zm0-4h2v2H2zm0-4h2v2H2zm0-4h2v2H2zm4-4h2v2H6zm0 16h2v2H6z"></svg:path>`,
})
export class IcSharpDevicesFoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
