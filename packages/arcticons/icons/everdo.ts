import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEverdoIcon],svg[arcticons-everdo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.07 37.76a2.25 2.25 0 0 1-3.17 0L4.5 26.37l3.17-3.17l9.81 9.8l22.85-22.84l3.17 3.17Z"></svg:path>`,
})
export class ArcticonsEverdoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
