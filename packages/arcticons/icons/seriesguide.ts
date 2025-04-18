import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSeriesguideIcon],svg[arcticons-seriesguide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.001 16.872L20.36 31.513s-7.243-7.175-7.32-7.175"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.5 10.5h-31a4 4 0 0 0-4 4v19a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4v-19a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsSeriesguideIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
