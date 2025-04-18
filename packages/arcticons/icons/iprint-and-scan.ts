import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIprintAndScanIcon],svg[arcticons-iprint-and-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.86 24.24v15h24.28v-15ZM7.5 8.76h33a3 3 0 0 1 3 3v2.058h0h-39h0V11.76a3 3 0 0 1 3-3m-3 5.058V27.6a3 3 0 0 0 3 3h4.36m24.28 0h4.36a3 3 0 0 0 3-3V13.818"></svg:path><svg:circle cx="18.154" cy="31.74" r="3.455" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.051 31.74h7.697m-7.697 2.362h4.963m-4.963-4.724h7.697"></svg:path>`,
})
export class ArcticonsIprintAndScanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
