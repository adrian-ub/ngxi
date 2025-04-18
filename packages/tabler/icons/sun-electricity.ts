import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSunElectricityIcon],svg[tabler-sun-electricity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12a4 4 0 0 0 4 4m0-8a4 4 0 0 0-4 4m-5 0h1m8-9v1m0 16v1M5.6 5.6l.7.7m0 11.4l-.7.7M20 7l-3 5h4l-3 5"></svg:path>`,
})
export class TablerSunElectricityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
