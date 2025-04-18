import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMapPointWaveBrokenIcon],svg[solar-map-point-wave-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M5.875 12.573C5.308 11.25 5 9.84 5 8.515C5 4.917 8.134 2 12 2s7 2.917 7 6.515c0 3.57-2.234 7.735-5.72 9.225a3.28 3.28 0 0 1-2.56 0c-1.113-.476-2.099-1.225-2.925-2.14"></svg:path><svg:path d="M14 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path><svg:path stroke-linecap="round" d="M20.96 15.5c.666.602 1.04 1.282 1.04 2c0 .925-.62 1.785-1.684 2.5M3.04 15.5c-.666.602-1.04 1.282-1.04 2C2 19.985 6.477 22 12 22c1.653 0 3.212-.18 4.586-.5"></svg:path></svg:g>`,
})
export class SolarMapPointWaveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
