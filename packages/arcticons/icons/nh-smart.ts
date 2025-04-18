import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNhSmartIcon],svg[arcticons-nh-smart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.263 29.353h8.418a2.15 2.15 0 0 1 2.15 2.15v4.246M18.263 17.325h8.418a2.15 2.15 0 0 1 2.15 2.15v4.246m-10.568-2.573h5.797l-5.797 5.423H32.91"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.265 4.5c7.706 0 17.176 9.059 17.176 25.588c0 10.118-7.706 13.412-16.47 13.412c-8.708 0-22.412-5.647-22.412-15.647S15.618 4.5 26.265 4.5"></svg:path>`,
})
export class ArcticonsNhSmartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
