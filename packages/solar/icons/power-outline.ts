import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPowerOutlineIcon],svg[solar-power-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 2a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" d="M8.792 4.397a.75.75 0 1 0-.584-1.382A9.75 9.75 0 0 0 2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75a9.75 9.75 0 0 0-5.958-8.985a.75.75 0 1 0-.584 1.382A8.253 8.253 0 0 1 12 20.25A8.25 8.25 0 0 1 8.792 4.397"></svg:path>`,
})
export class SolarPowerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
