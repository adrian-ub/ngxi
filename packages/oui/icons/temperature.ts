import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTemperatureIcon],svg[oui-temperature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 15a3.5 3.5 0 0 1-1.75-6.532L7 8.324V2.5A1.496 1.496 0 0 1 9.908 2H8.5v1H10v1H8.5v1H10v1H8.5v1H10v1.324l.25.144A3.5 3.5 0 0 1 8.5 15M11 7.758V2.5a2.5 2.5 0 1 0-5 0v5.258a4.5 4.5 0 1 0 5 0"></svg:path><svg:path fill="currentColor" d="M8.5 9a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5"></svg:path>`,
})
export class OuiTemperatureIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
