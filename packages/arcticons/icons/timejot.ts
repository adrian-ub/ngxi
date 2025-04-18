import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTimejotIcon],svg[arcticons-timejot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.385 19.348L37.308 5.5H5.49v34.076l13.554.083m-6.856-25.456l19.001.089m-19.331 8.692l10.822-.089m-10.74 8.338h6.692"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.538 42.5a8.686 8.686 0 0 1-6.743-8.747a8.64 8.64 0 0 1 6.863-8.624a8.176 8.176 0 0 1 9.096 5.79a9.11 9.11 0 0 1-3.745 10.61m.004-.003l.002-5.9m-.002 5.9l5.496-.015"></svg:path>`,
})
export class ArcticonsTimejotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
