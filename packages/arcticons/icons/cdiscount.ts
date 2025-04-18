import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCdiscountIcon],svg[arcticons-cdiscount-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.28 13.419A21.506 21.506 0 0 0 24 45.5a22 22 0 0 0 2.657-.163M42.72 34.583A21.506 21.506 0 0 0 24 2.5a22 22 0 0 0-2.658.163"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.046 15.954a11.378 11.378 0 1 0 0 16.092"></svg:path>`,
})
export class ArcticonsCdiscountIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
