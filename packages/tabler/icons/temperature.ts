import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTemperatureIcon],svg[tabler-temperature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 13.5a4 4 0 1 0 4 0V5a2 2 0 0 0-4 0zM10 9h4"></svg:path>`,
})
export class TablerTemperatureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
