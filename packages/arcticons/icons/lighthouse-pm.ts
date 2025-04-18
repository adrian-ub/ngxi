import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLighthousePmIcon],svg[arcticons-lighthouse-pm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="24" height="39" x="12" y="4.5" fill="none" stroke="currentColor" rx="2" ry="2"></svg:rect><svg:circle cx="24" cy="10" r="2" fill="none" stroke="currentColor"></svg:circle>`,
})
export class ArcticonsLighthousePmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
