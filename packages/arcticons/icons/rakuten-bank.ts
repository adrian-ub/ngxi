import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRakutenBankIcon],svg[arcticons-rakuten-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.308 30.553V3.997h8.874c5.12 0 9.216 3.983 9.216 8.962s-4.096 8.963-9.216 8.963h-8.874m9.208-.008l8.54 8.307m-.14 7.691l-20.47 3.091l-5.273-4.688h25.721"></svg:path><svg:path d="M43.827 37.003a7 7 0 1 1-14 0a7 7 0 0 1 14 0"></svg:path><svg:path d="m39.427 33.34l-2.6 4l-2.6-4m2.6 8v-4m-2.5 0h5m-5 2h5"></svg:path></svg:g>`,
})
export class ArcticonsRakutenBankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
