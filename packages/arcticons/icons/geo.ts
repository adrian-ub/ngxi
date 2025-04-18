import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGeoIcon],svg[arcticons-geo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.5 24l6.5 6.5l6.5-6.5l-6.5-6.5l-13 13l-6.5-6.5l6.5-6.5m-13 0L4.5 24l6.5 6.5l6.5-6.5l-3.25-3.25l-3.9 3.9"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.75 20.25l-.3 2.3l-2.3.3l-.3 2.3l-2.3.3l-.3 2.3"></svg:path>`,
})
export class ArcticonsGeoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
