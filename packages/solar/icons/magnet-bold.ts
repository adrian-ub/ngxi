import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMagnetBoldIcon],svg[solar-magnet-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.25 2H13C7.477 2 3 6.477 3 12s4.477 10 10 10h3.25v-5H13a5 5 0 0 1 0-10h3.25zm1.5 5h1.75A1.5 1.5 0 0 0 21 5.5v-2A1.5 1.5 0 0 0 19.5 2h-1.75zm0 10v5h1.75a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5z"></svg:path>`,
})
export class SolarMagnetBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
