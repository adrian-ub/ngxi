import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTemperatureFahrenheitAltIcon],svg[carbon-temperature-fahrenheit-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 11V9H15v18h2v-8h8v-2h-8v-6zM8 13a4 4 0 1 1 4-4a4.01 4.01 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2.006 2.006 0 0 0-2-2"></svg:path>`,
})
export class CarbonTemperatureFahrenheitAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
