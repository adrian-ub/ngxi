import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWestlottoIcon],svg[arcticons-westlotto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.378 13.25L23.998 2.5l18.62 10.75v21.5L23.998 45.5L5.378 34.75l-.006-21.49l37.256 21.471L23.997 24l18.607-10.772"></svg:path>`,
})
export class ArcticonsWestlottoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
