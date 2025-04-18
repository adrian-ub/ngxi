import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggThermostatIcon],svg[gg-thermostat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 19a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill-rule="evenodd" d="M15 14a5 5 0 1 1-6 0V4a3 3 0 1 1 6 0zM13 4v11.17A3.001 3.001 0 0 1 12 21a3 3 0 0 1-1-5.83V4a1 1 0 1 1 2 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgThermostatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
