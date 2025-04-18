import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMagnetWaveLinearIcon],svg[solar-magnet-wave-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14.444 3H16.5A1.5 1.5 0 0 1 18 4.5V6a1.5 1.5 0 0 1-1.5 1.5h-2.056m0-4.5H11a9 9 0 1 0 0 18h3.444m0-18v4.5m0 0h-3.5a4.5 4.5 0 0 0 0 9h3.5m0 0H16.5A1.5 1.5 0 0 1 18 18v1.5a1.5 1.5 0 0 1-1.5 1.5h-2.056m0-4.5V21"></svg:path><svg:path d="M21.5 6S23 7.8 23 12s-1.5 6-1.5 6m-2-9s.5.9.5 3s-.5 3-.5 3"></svg:path></svg:g>`,
})
export class SolarMagnetWaveLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
