import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOsmdashboardforopentracksIcon],svg[arcticons-osmdashboardforopentracks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.69 11.34L13.28 26L24 27l3.9 9.74Zm-30.2 4.5L32.01 5.5m.83 15.1l9.67 5.41m-25.92-14.5l10.15 5.67m-.14 16.26l-7.88 9.06m17.44-20.04l-6.02 6.92"></svg:path>`,
})
export class ArcticonsOsmdashboardforopentracksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
