import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSeriesKrIcon],svg[arcticons-series-kr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.391 14.75H30.61v2.641l11.89 1.326v-7.934c0-3.957-1.326-5.283-5.283-5.283H12.11c-3.97 0-6.61 2.641-6.61 6.609V24c0 1.326 1.326 2.641 2.641 2.641l22.468 1.326v5.283H17.39v-2.641L5.5 29.283v7.934c0 3.957 1.326 5.283 5.283 5.283H35.89c3.968 0 6.609-2.641 6.609-6.609V24c0-1.326-1.326-2.641-2.641-2.641L17.39 20.033z"></svg:path>`,
})
export class ArcticonsSeriesKrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
