import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPlusMinusBrokenIcon],svg[solar-plus-minus-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m3.464 20.535l17.071-17.07"></svg:path><svg:path stroke-linecap="round" d="M18 17h-5m-2.5-9H8m0 0H5.5M8 8V5.5M8 8v2.5M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarPlusMinusBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
