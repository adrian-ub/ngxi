import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMagnetWaveLineDuotoneIcon],svg[solar-magnet-wave-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M18 18v1.5a1.5 1.5 0 0 1-1.5 1.5H11a9 9 0 1 1 0-18h5.5A1.5 1.5 0 0 1 18 4.5V6a1.5 1.5 0 0 1-1.5 1.5h-5.556a4.5 4.5 0 0 0 0 9H16.5A1.5 1.5 0 0 1 18 18"></svg:path><svg:path stroke-linejoin="round" d="M14.444 3v4.5m0 9V21" opacity=".5"></svg:path><svg:path d="M21.5 6S23 7.8 23 12s-1.5 6-1.5 6" opacity=".7"></svg:path><svg:path d="M19.5 9s.5.9.5 3s-.5 3-.5 3" opacity=".4"></svg:path></svg:g>`,
})
export class SolarMagnetWaveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
