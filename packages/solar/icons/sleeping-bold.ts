import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSleepingBoldIcon],svg[solar-sleeping-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 6a.75.75 0 0 0-1.5 0v12a.75.75 0 0 0 1.5 0v-1.25h18.392V18a.75.75 0 0 0 1.5 0v-2.357c0-1.995 0-2.992-.28-3.794a5 5 0 0 0-3.068-3.068c-.802-.28-1.8-.28-3.794-.28h-.002c-.798 0-1.838 0-2.159.111a2 2 0 0 0-1.227 1.227C12 10.16 12 10.56 12 11.357v3.893H2.75z"></svg:path><svg:path fill="currentColor" d="M7 13.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path>`,
})
export class SolarSleepingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
