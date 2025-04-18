import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneRotateOrientationBrokenIcon],svg[solar-smartphone-rotate-orientation-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 14v2c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h1c2.828 0 4.243 0 5.121-.879C15 20.243 15 18.828 15 16V8c0-2.828 0-4.243-.879-5.121C13.243 2 11.828 2 9 2H8c-2.828 0-4.243 0-5.121.879C2 3.757 2 5.172 2 8v2m15.5.007c1.86.027 2.914.165 3.621.872C22 11.758 22 13.172 22 16s0 4.243-.879 5.122c-.707.707-1.761.845-3.621.872M11 5H6m13 13v-4"></svg:path><svg:path d="M10 17.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20.5 6.986L22 8c0-3.015-2.162-5.517-5-6"></svg:path></svg:g>`,
})
export class SolarSmartphoneRotateOrientationBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
