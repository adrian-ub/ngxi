import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHallowIcon],svg[arcticons-hallow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="27.813" r="15.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.95 5.836c.079 1.043-5.655 2.327-12.807 2.867s-13.014.134-13.093-.91q0 0 0 0c-.079-1.043 5.655-2.327 12.807-2.867s13.014-.133 13.093.91q0 0 0 0"></svg:path>`,
})
export class ArcticonsHallowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
