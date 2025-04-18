import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSecurityUpdateGoodIcon],svg[ic-sharp-security-update-good-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1v22h14V1zm12 17H7V6h10zm-1-7.95l-1.41-1.41l-3.54 3.54l-1.41-1.41l-1.41 1.41L11.05 15z"></svg:path>`,
})
export class IcSharpSecurityUpdateGoodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
