import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSecurityUpdateWarningIcon],svg[ic-sharp-security-update-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15h2v2h-2zm0-8h2v6h-2z"></svg:path><svg:path fill="currentColor" d="M5.01 1v22H19V1zM17 18H7V6h10z"></svg:path>`,
})
export class IcSharpSecurityUpdateWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
