import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHatchSleepIcon],svg[arcticons-hatch-sleep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5c6.65 0 14.432-4.755 14.706-13.747C39.08 17.5 34.15 4.5 24 4.5S8.92 17.5 9.294 29.753C9.568 38.745 17.35 43.5 24 43.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.274 27.084c0 2.787 6.593 5.047 14.726 5.047s14.726-2.26 14.726-5.047"></svg:path>`,
})
export class ArcticonsHatchSleepIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
