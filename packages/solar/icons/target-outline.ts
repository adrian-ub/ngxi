import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTargetOutlineIcon],svg[solar-target-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.25 12a.75.75 0 0 1 .75-.75h1.25V10a.75.75 0 0 1 1.5 0v1.25H14a.75.75 0 0 1 0 1.5h-1.25V14a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25m-.75 1.53a9.25 9.25 0 0 0-8.47 8.47H5a.75.75 0 0 1 0 1.5H2.78a9.25 9.25 0 0 0 8.47 8.47V19a.75.75 0 0 1 1.5 0v2.22a9.25 9.25 0 0 0 8.47-8.47H19a.75.75 0 0 1 0-1.5h2.22a9.25 9.25 0 0 0-8.47-8.47V5a.75.75 0 0 1-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarTargetOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
