import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBluelinkIcon],svg[arcticons-bluelink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.026 29.562a6.076 6.076 0 1 1 0 12.152H6V17.409h10.026a6.076 6.076 0 1 1 0 12.153m0 0H6m21.526-8.802a5.276 5.276 0 1 0 3.731-9.007"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.257 27.772C37.19 27.772 42 22.962 42 17.029S37.19 6.286 31.257 6.286c-2.82 0-5.386 1.086-7.303 2.864"></svg:path>`,
})
export class ArcticonsBluelinkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
