import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFlagDuotoneIcon],svg[lets-icons-flag-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M16.577 8.526L6.658 5.219c-.3-.1-.45-.15-.554-.075S6 5.377 6 5.694V13l10.577-3.526c.588-.196.882-.294.882-.474s-.294-.278-.882-.474"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M6 13V5.694c0-.317 0-.475.104-.55s.254-.025.554.075l9.919 3.307c.588.196.882.294.882.474s-.294.278-.882.474zm0 0v6"></svg:path></svg:g>`,
})
export class LetsIconsFlagDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
