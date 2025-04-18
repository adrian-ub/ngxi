import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRocksndiamondsIcon],svg[arcticons-rocksndiamonds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.79 37.62l18.12 5.88l-13.28-15.64l20.59-8.34l-7.31 24L43.5 31.27l-8.28-11.75l6.12-6.46l-19.7-8.56l13.58 15"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.63 27.86l-4.84 9.76L4.5 20.27L21.64 4.5Zm0 0L4.5 20.27m39 11l-2.16-18.21"></svg:path>`,
})
export class ArcticonsRocksndiamondsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
