import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoNavIconGridIcon],svg[fontisto-nav-icon-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h5.219v5.219H0zm9.39 0h5.219v5.219H9.39zm8.608 0h5.219v5.219h-5.219zM0 9.39h5.219v5.219H0zm9.39 0h5.219v5.219H9.39zm8.608 0h5.219v5.219h-5.219zM0 18.781h5.219V24H0zm9.39 0h5.219V24H9.39zm8.608 0h5.219V24h-5.219z"></svg:path>`,
})
export class FontistoNavIconGridIcon {
  readonly viewBox = input("0 0 23 24")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
