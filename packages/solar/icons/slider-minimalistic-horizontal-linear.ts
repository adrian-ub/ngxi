import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSliderMinimalisticHorizontalLinearIcon],svg[solar-slider-minimalistic-horizontal-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M8 18c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12s0 4.243-.879 5.121C20.243 18 18.828 18 16 18z"></svg:path><svg:path stroke-linecap="round" d="M4.5 3h15m-15 18h15"></svg:path></svg:g>`,
})
export class SolarSliderMinimalisticHorizontalLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
