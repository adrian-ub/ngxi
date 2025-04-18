import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSnoozeIcon],svg[carbon-snooze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14v-2h-8v2h5.5L12 20v2h8v-2h-5.493zm3.001-8.588L24.416 4L28 7.59l-1.415 1.412z"></svg:path><svg:path fill="currentColor" d="M16 28a11 11 0 1 1 11-11a11.013 11.013 0 0 1-11 11m0-20a9 9 0 1 0 9 9a9.01 9.01 0 0 0-9-9M4.002 7.589l3.583-3.59L9 5.41L5.417 9z"></svg:path>`,
})
export class CarbonSnoozeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
