import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSliderVerticalMinimalisticBrokenIcon],svg[solar-slider-vertical-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18 8c0-2.828 0-4.243-.879-5.121C16.243 2 14.828 2 12 2s-4.243 0-5.121.879C6 3.757 6 5.172 6 8v8c0 2.828 0 4.243.879 5.121C7.757 22 9.172 22 12 22s4.243 0 5.121-.879C18 20.243 18 18.828 18 16v-4m3-7.5v15M3 4.5v15"></svg:path>`,
})
export class SolarSliderVerticalMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
