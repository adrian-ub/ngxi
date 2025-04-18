import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBouyguesTelecomIcon],svg[arcticons-bouygues-telecom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="12.97" cy="29.193" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.786" ry="12.452" transform="rotate(-34.12 12.97 29.193)"></svg:ellipse><svg:ellipse cx="35.03" cy="29.485" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="12.452" ry="5.786" transform="rotate(-55.88 35.03 29.485)"></svg:ellipse><svg:ellipse cx="23.854" cy="13.492" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="12.452" ry="5.786" transform="rotate(-.263 23.846 13.496)"></svg:ellipse>`,
})
export class ArcticonsBouyguesTelecomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
