import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmSecurityIcon],svg[carbon-ibm-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0L4 5.978v14.066a12 12 0 0 0 24 0V5.978Zm6.83 27.314L16 23.912v2.228l5.036 2.509A10.003 10.003 0 0 1 6 20.044V7.21l10-4.982L26 7.21v3.75L16 5.978v2.228l10 4.982v3.75l-10-4.982v2.228l10 4.982v.878a10 10 0 0 1-.37 2.687L16 17.934v2.228l8.895 4.431a10 10 0 0 1-2.065 2.721"></svg:path>`,
})
export class CarbonIbmSecurityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
