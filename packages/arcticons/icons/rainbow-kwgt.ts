import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRainbowKwgtIcon],svg[arcticons-rainbow-kwgt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M33.43 43.327A21.4 21.4 0 0 1 24 45.5C12.126 45.5 2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24a21.4 21.4 0 0 1-2.174 9.431"></svg:path><svg:circle cx="38.5" cy="38.5" r="7"></svg:circle><svg:path d="M36.654 34.492v8.016m3.692 0v-2.053L38.273 38.5l2.073-1.955v-2.053"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M35.906 32A17.93 17.93 0 0 0 24 27.5c-7.25 0-13.498 4.286-16.35 10.461"></svg:path><svg:path d="M42.01 32.432C37.966 26.868 31.405 23.25 24 23.25c-8.075 0-15.145 4.301-19.044 10.738"></svg:path><svg:path d="M44.874 29.172C40.023 22.98 32.476 19 24 19S7.977 22.98 3.127 29.172"></svg:path><svg:path d="M45.494 23.51C39.95 18.09 32.365 14.75 24 14.75S8.043 18.093 2.499 23.517"></svg:path><svg:path d="M44.338 17.013C38.606 12.913 31.585 10.5 24 10.5S9.394 12.913 3.662 17.012"></svg:path></svg:g>`,
})
export class ArcticonsRainbowKwgtIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
