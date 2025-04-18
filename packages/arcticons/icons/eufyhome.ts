import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEufyhomeIcon],svg[arcticons-eufyhome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.192 14.546L25.171 5.96a2.48 2.48 0 0 0-2.341 0L6.808 14.546A2.48 2.48 0 0 0 5.5 16.73v23.125a2.48 2.48 0 0 0 2.478 2.478h32.044a2.48 2.48 0 0 0 2.478-2.478V16.73a2.48 2.48 0 0 0-1.308-2.184"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 26.11l6.437-6.436a9.103 9.103 0 1 0 2.666 6.436"></svg:path>`,
})
export class ArcticonsEufyhomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
