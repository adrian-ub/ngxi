import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOhmsnowIcon],svg[arcticons-ohmsnow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 29l5.5 8.36h10.14C13.57 24.54 14.68 10.62 24 10.64s10.3 13.88 3.88 26.72H38L43.5 29"></svg:path>`,
})
export class ArcticonsOhmsnowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
