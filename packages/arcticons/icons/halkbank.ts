import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHalkbankIcon],svg[arcticons-halkbank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.65 14.895v18.21m2.248-21.359v24.508m2.496-28.07v31.633M14.76 4.5v39m0-19.459h18.48M17.216 8.405v13.313h13.52V8.364m9.614 6.531v18.21m-2.248-21.359v24.508m-2.496-28.07v31.633M33.24 4.5v39"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.216 8.405v13.313h13.52V8.364"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.875 15.2v1.934h4.18v-1.94"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.49 11.805v7.598h8.983v-7.622M17.216 39.734V26.42h13.52v13.354"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.875 32.938v-1.933h4.18v1.939"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.49 36.334v-7.599h8.983v7.622"></svg:path>`,
})
export class ArcticonsHalkbankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
