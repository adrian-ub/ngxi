import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpInstallMobileIcon],svg[ic-sharp-install-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 18H7V6h7V1H5v22h14v-7h-2z"></svg:path><svg:path fill="currentColor" d="m18 14l5-5l-1.41-1.41L19 10.17V3h-2v7.17l-2.59-2.58L13 9z"></svg:path>`,
})
export class IcSharpInstallMobileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
