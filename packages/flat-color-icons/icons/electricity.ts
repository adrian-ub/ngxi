import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsElectricityIcon],svg[flat-color-icons-electricity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00BCD4" d="M33.7 5L22 17l15 5l-15.7 14.7l5.1 2.8L12 43l2.7-14.8l2.9 5.1L27 24l-15-5L25 5z"></svg:path>`,
})
export class FlatColorIconsElectricityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
