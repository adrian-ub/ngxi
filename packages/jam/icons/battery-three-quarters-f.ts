import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamBatteryThreeQuartersFIcon],svg[jam-battery-three-quarters-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2v8h4V2zm6 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2z"></svg:path>`,
})
export class JamBatteryThreeQuartersFIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
