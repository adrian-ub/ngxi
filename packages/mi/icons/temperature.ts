import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[miTemperatureIcon],svg[mi-temperature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5a3 3 0 1 1 6 0v8a5 5 0 1 1-6 0zm3-1a1 1 0 0 0-1 1v8.535a1 1 0 0 1-.5.866a3 3 0 1 0 2.999 0a1 1 0 0 1-.499-.866V5a1 1 0 0 0-1-1"></svg:path>`,
})
export class MiTemperatureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
