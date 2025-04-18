import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJapesLuxIconIcon],svg[arcticons-japes-lux-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.612 5.5c6.565 0 11.888 5.323 11.888 11.888c0 6.576-5.323 11.9-11.888 11.9c-6.576 0-11.9-5.324-11.9-11.9c0-6.565 5.324-11.888 11.9-11.888"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.118 20.92q.334 1.755.382 4.405V42.5H25.325C13.425 42.5 5.5 34.575 5.5 22.675V5.5h17.175q2.555 0 4.595.418"></svg:path>`,
})
export class ArcticonsJapesLuxIconIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
