import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUpgradoIcon],svg[arcticons-upgrado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.313 21.744l29.325.023l-1.989 4.091l-29.385.093zM6.547 30.82l29.327.022l-1.99 4.091l-29.384.093zm7.628-17.846l29.325.023l-1.988 4.09l-29.387.093z"></svg:path>`,
})
export class ArcticonsUpgradoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
