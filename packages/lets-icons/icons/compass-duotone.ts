import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompassDuotoneIcon],svg[lets-icons-compass-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path fill="currentColor" d="M9.831 7.843c.85.458 3.097 1.764 3.901 3.157s.812 3.992.784 4.957a.233.233 0 0 1-.347.2c-.85-.458-3.097-1.764-3.901-3.157s-.812-3.992-.784-4.957a.233.233 0 0 1 .347-.2"></svg:path>`,
})
export class LetsIconsCompassDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
