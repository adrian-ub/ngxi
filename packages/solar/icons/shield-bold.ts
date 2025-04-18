import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarShieldBoldIcon],svg[solar-shield-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 2.073c-.606.113-1.318.357-2.412.732L8.265 3c-3.007 1.03-4.51 1.544-4.887 2.082C3.008 5.608 3 7.15 3 10.21l8.25-2.75zm0 6.967L3 11.79v.201c0 5.638 4.239 8.374 6.899 9.536c.51.223.84.367 1.351.432zm1.5 12.92V9.04L21 11.79v.201c0 5.638-4.239 8.374-6.899 9.536c-.51.223-.84.367-1.351.432m0-14.499V2.072c.606.113 1.318.357 2.412.732l.573.196c3.007 1.029 4.51 1.543 4.887 2.081c.37.526.378 2.068.378 5.127z"></svg:path>`,
})
export class SolarShieldBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
