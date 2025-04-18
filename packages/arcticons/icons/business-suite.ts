import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBusinessSuiteIcon],svg[arcticons-business-suite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.33 34.669A21.51 21.51 0 0 1 8.796 8.797L24 24L8.797 39.203A21.497 21.497 0 1 0 13.33 5.33"></svg:path>`,
})
export class ArcticonsBusinessSuiteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
