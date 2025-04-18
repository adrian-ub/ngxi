import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNumeroIcon],svg[arcticons-numero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 8.48v20.694c0 5.714-4.141 10.346-9.25 10.346S24 34.889 24 29.173V18.827c0-5.715-4.141-10.348-9.25-10.348S5.5 13.112 5.5 18.826V39.52"></svg:path>`,
})
export class ArcticonsNumeroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
