import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCircleBottomUpBrokenIcon],svg[solar-circle-bottom-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m3 21l8-8m0 0H5m6 0v6"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5M2 12C2 6.477 6.477 2 12 2c1.821 0 3.53.487 5 1.338"></svg:path></svg:g>`,
})
export class SolarCircleBottomUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
