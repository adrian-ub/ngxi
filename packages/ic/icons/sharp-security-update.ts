import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSecurityUpdateIcon],svg[ic-sharp-security-update-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1v22h14V1zm12 17H7V6h10zm-1-6h-3V8h-2v4H8l4 4z"></svg:path>`,
})
export class IcSharpSecurityUpdateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
