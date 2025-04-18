import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsPressureLowAltIcon],svg[meteocons-pressure-low-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2885c7" d="M234.3 182v120.6H310V330H202V182Z"></svg:path>`,
})
export class MeteoconsPressureLowAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
