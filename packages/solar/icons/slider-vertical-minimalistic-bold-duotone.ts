import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSliderVerticalMinimalisticBoldDuotoneIcon],svg[solar-slider-vertical-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.846 8c0-2.828 0-4.243.901-5.121C7.65 2 9.1 2 12 2s4.352 0 5.253.879c.9.878.9 2.293.9 5.121v8c0 2.828 0 4.243-.9 5.121C16.352 22 14.9 22 12 22s-4.351 0-5.253-.879c-.9-.878-.9-2.293-.9-5.121z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.77 3.75a.76.76 0 0 1 .768.75v15a.76.76 0 0 1-.769.75A.76.76 0 0 1 2 19.5v-15a.76.76 0 0 1 .77-.75m18.46 0a.76.76 0 0 1 .77.75v15a.76.76 0 0 1-.77.75a.76.76 0 0 1-.768-.75v-15a.76.76 0 0 1 .769-.75" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarSliderVerticalMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
