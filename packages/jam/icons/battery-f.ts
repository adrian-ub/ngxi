import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamBatteryFIcon],svg[jam-battery-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 0h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2"></svg:path><svg:path d="M18.5 3h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-.5A1.5 1.5 0 0 1 17 7.5v-3A1.5 1.5 0 0 1 18.5 3"></svg:path></svg:g>`,
})
export class JamBatteryFIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
