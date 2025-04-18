import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBatteryAlertVariantOutlineIcon],svg[mdi-battery-alert-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 20H6V6h8m.67-2H13V2H7v2H5.33C4.6 4 4 4.6 4 5.33v15.34C4 21.4 4.6 22 5.33 22h9.34c.73 0 1.33-.6 1.33-1.33V5.33C16 4.6 15.4 4 14.67 4M21 7h-2v6h2V8m0 7h-2v2h2z"></svg:path>`,
})
export class MdiBatteryAlertVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
