import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBatteryNegativeIcon],svg[mdi-battery-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.67 4A1.33 1.33 0 0 1 13 5.33v15.34c0 .73-.6 1.33-1.33 1.33H2.33C1.6 22 1 21.4 1 20.67V5.33A1.33 1.33 0 0 1 2.33 4H4V2h6v2zM15 12h8v2h-8zM3 13h8V6H3z"></svg:path>`,
})
export class MdiBatteryNegativeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
