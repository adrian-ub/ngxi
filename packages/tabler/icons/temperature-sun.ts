import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTemperatureSunIcon],svg[tabler-temperature-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 13.5a4 4 0 1 0 4 0V5a2 2 0 1 0-4 0zM4 9h4m5 7a4 4 0 1 0 0-8a4 4 0 0 0-1 .124M13 3v1m8 8h1m-9 8v1m6.4-15.4l-.7.7m0 11.4l.7.7"></svg:path>`,
})
export class TablerTemperatureSunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
