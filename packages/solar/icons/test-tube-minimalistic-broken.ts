import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTestTubeMinimalisticBrokenIcon],svg[solar-test-tube-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m6.8 11.783l1.275.143a2.205 2.205 0 0 1 1.944 1.952a2.21 2.21 0 0 0 1.32 1.787l1.661.69m0 0l-3.512 3.527a3.79 3.79 0 0 1-5.375 0a3.83 3.83 0 0 1 0-5.4l10.75-10.797l5.376 5.399l-1.81 1.818M13 16.355l3-3.014m5-3.492L14.182 3"></svg:path>`,
})
export class SolarTestTubeMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
