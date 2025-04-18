import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEasyOpenLinkIcon],svg[arcticons-easy-open-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.646 24.251L22.63 34.27l-8.898-8.898L23.75 15.354m8.898 8.897l3.235 3.235H42.5V5.5H20.516v6.619l3.234 3.234m8.235 9.562V42.5H5.5V16.017h17.588"></svg:path>`,
})
export class ArcticonsEasyOpenLinkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
