import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSystemSecurityUpdateIcon],svg[ic-sharp-system-security-update-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1v22h14V1zm12 17H7V6h10zm-1-6h-3V8h-2v4H8l4 4z"></svg:path>`,
})
export class IcSharpSystemSecurityUpdateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
