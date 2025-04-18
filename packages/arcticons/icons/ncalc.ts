import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNcalcIcon],svg[arcticons-ncalc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.232 4.5v14.053m7.027-7.026H26.206M12.838 33.784V17.977a1 1 0 0 1 1.708-.706l16.978 17.053a1 1 0 0 0 1.708-.705V21.895"></svg:path><svg:circle cx="12.838" cy="38.642" r="4.858" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsNcalcIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
