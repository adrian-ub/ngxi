import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSliderVerticalMinimalisticLinearIcon],svg[solar-slider-vertical-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6 8c0-2.828 0-4.243.879-5.121C7.757 2 9.172 2 12 2s4.243 0 5.121.879C18 3.757 18 5.172 18 8v8c0 2.828 0 4.243-.879 5.121C16.243 22 14.828 22 12 22s-4.243 0-5.121-.879C6 20.243 6 18.828 6 16z"></svg:path><svg:path stroke-linecap="round" d="M21 4.5v15M3 4.5v15"></svg:path></svg:g>`,
})
export class SolarSliderVerticalMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
