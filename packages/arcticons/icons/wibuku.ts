import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWibukuIcon],svg[arcticons-wibuku-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 10.145l10.88 27.454l3.967-9.312l-5.856-14.494zm39 .256L32.62 37.855l-3.967-9.311l5.856-14.495zm-23.854 8.223l4.277 10.612l4.027-10.544l-4.027 1.697z"></svg:path>`,
})
export class ArcticonsWibukuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
