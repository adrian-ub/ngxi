import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRadikoIcon],svg[arcticons-radiko-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.145 24.284a4.638 4.638 0 0 1-.1 7.322m3.605-9.82a8.856 8.856 0 0 1-.124 12.366m3.706-14.916a13.22 13.22 0 0 1 3.238 8.67h0c0 3.267-1.209 6.418-3.394 8.846M15.09 11.248v24.79m0-15.609c0-5.05 4.131-9.181 9.18-9.181h0"></svg:path>`,
})
export class ArcticonsRadikoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
