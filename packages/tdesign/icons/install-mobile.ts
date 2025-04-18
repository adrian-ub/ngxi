import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignInstallMobileIcon],svg[tdesign-install-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h11v2H6v18h12V11h2v12H4zm16 0v4.657l1.53-1.466l1.384 1.445L19 9.385l-3.914-3.75l1.384-1.444L18 5.657V1zm-9 16h2.004v2.004H11z"></svg:path>`,
})
export class TdesignInstallMobileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
