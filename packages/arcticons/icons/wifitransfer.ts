import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWifitransferIcon],svg[arcticons-wifitransfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.84 13.818a7.575 7.575 0 0 0-9.673-.024v.024m12.181-3.05a11.535 11.535 0 0 0-14.695 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.675 7.996a15.17 15.17 0 0 0-19.393.014m-.647 9.042a2.86 2.86 0 0 0-2.86 2.86V40.64a2.86 2.86 0 0 0 2.86 2.86h20.73a2.86 2.86 0 0 0 2.86-2.86V19.987a2.86 2.86 0 0 0-2.86-2.86h-2.468a1.39 1.39 0 0 0-1.39 1.389v6.599a.696.696 0 0 1-.697.696H18.19a.696.696 0 0 1-.696-.696v-6.67c0-.77-.624-1.393-1.392-1.393zm1.78 11.736h17.17a1 1 0 0 1 1 1v9.778a1 1 0 0 1-1 1h-17.17a1 1 0 0 1-1-1v-9.778a1 1 0 0 1 1-1m1.762 2.774h13.645m0 3.115H17.179m0 3.114h13.644"></svg:path><svg:rect width="2.387" height="4.447" x="25.656" y="19.147" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect>`,
})
export class ArcticonsWifitransferIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
