import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUae4armIcon],svg[arcticons-uae4arm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.25 28l8.16 11.89l21.26-31.8M18.68 35.82l2.81 4.09L42.75 8.09M13.33 28l2.74 4"></svg:path>`,
})
export class ArcticonsUae4armIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
