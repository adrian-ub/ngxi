import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWidget3OutlineIcon],svg[solar-widget-3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 1.75a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M3.25 6.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m14.25 6.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5m-3.25 4.75a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m-1.5-11a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0m4.75-3.25a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5m-11 9.5a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M3.25 17.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarWidget3OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
