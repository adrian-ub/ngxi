import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTemperatureCelsiusIcon],svg[tabler-temperature-celsius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0m16 1a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3"></svg:path>`,
})
export class TablerTemperatureCelsiusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
