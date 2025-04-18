import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPaypayBankIcon],svg[arcticons-paypay-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.995 6.052l-14.41 8.265l-4.085.009v3.39h3.535v17.346H7.524v3.385l-1.68.116v3.385H42.14v-3.385l-1.664-.116v-3.385h-1.52V17.716H42.5v-3.39l-4.094-.009z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.035 17.716c10.609-1.232 27.713 3.01 25.022 11.31c-2.69 8.299-17.126 5.968-17.126 5.968M20.92 18.37l-5.656 23.572"></svg:path>`,
})
export class ArcticonsPaypayBankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
