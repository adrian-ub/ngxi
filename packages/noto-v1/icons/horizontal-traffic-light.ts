import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1HorizontalTrafficLightIcon],svg[noto-v1-horizontal-traffic-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#616161" d="M42.89 126h-7.66a6.3 6.3 0 0 1-6.3-6.3V14.28a6.3 6.3 0 0 1 6.3-6.3h7.66a6.3 6.3 0 0 1 6.3 6.3V119.7a6.3 6.3 0 0 1-6.3 6.3"></svg:path><svg:path fill="#757576" d="M100.84 81.41H32.63c-14.39 0-26.06-11.67-26.06-26.06s11.67-26.06 26.06-26.06h68.21c14.39 0 26.06 11.67 26.06 26.06s-11.67 26.06-26.06 26.06"></svg:path><svg:path fill="#edece4" d="M95.94 76.51H27.72c-14.39 0-26.06-11.67-26.06-26.06s11.67-26.06 26.06-26.06h68.21c14.39 0 26.06 11.67 26.06 26.06c.01 14.39-11.66 26.06-26.05 26.06"></svg:path><svg:circle cx="97.11" cy="50.44" r="14.34" fill="#4caf50"></svg:circle><svg:circle cx="61.83" cy="50.44" r="14.34" fill="#fcc21b"></svg:circle><svg:circle cx="26.55" cy="50.44" r="14.34" fill="#e43f11"></svg:circle>`,
})
export class NotoV1HorizontalTrafficLightIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
