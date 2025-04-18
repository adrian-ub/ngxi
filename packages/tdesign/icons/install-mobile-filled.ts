import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignInstallMobileFilledIcon],svg[tdesign-install-mobile-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1H4v22h16V11h-2v6H6V3h9zm-1.997 18v2.004H11V19z"></svg:path><svg:path fill="currentColor" d="M20 1.002v4.586l1.501-1.5L22.915 5.5l-3.914 3.915L15.084 5.5l1.414-1.414l1.503 1.503V1.002z"></svg:path>`,
})
export class TdesignInstallMobileFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
