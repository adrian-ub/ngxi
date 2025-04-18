import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTransferVerticalBoldIcon],svg[solar-transfer-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13.75a.75.75 0 0 0-.507 1.303l6 5.5A.75.75 0 0 0 10.75 20V4a.75.75 0 0 0-1.5 0v9.75zm16-3.5h-5.25V20a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 1.257-.553l6 5.5A.75.75 0 0 1 20 10.25"></svg:path>`,
})
export class SolarTransferVerticalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
