import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarScreencastBrokenIcon],svg[solar-screencast-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14 20c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12v-1M2 8.5c0-.464 0-.697.02-.892a4 4 0 0 1 3.588-3.589C5.803 4 6.036 4 6.5 4H14c3.771 0 5.657 0 6.828 1.172c.47.47.751 1.054.92 1.828"></svg:path><svg:path d="M11 20a9 9 0 0 0-9-9"></svg:path><svg:path d="M8 20a6 6 0 0 0-6-6m3 6a3 3 0 0 0-3-3"></svg:path></svg:g>`,
})
export class SolarScreencastBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
