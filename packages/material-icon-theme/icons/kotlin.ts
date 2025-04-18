import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeKotlinIcon],svg[material-icon-theme-kotlin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="materialIconThemeKotlin0" x1="1.725" x2="22.185" y1="22.67" y2="1.982" gradientTransform="translate(1.306 1.129)scale(.89324)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#7C4DFF"></svg:stop><svg:stop offset=".5" stop-color="#D500F9"></svg:stop><svg:stop offset="1" stop-color="#EF5350"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#materialIconThemeKotlin0)" d="M2.975 2.976v18.048h18.05v-.03l-4.478-4.511l-4.48-4.515l4.48-4.515l4.443-4.477z"></svg:path>`,
})
export class MaterialIconThemeKotlinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
