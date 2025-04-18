import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSecuregoRenaultBankDirektIcon],svg[arcticons-securego-renault-bank-direkt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 38.756c1.485 0 13.402-4.995 13.402-11.938V12.865L24 9.275l-13.402 3.59v13.953c0 6.943 11.917 11.938 13.402 11.938M12.388 5.915v6.474m0 19.12v10.595"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.791 20.532h12.53v9.403c-.014.506-.354.843-.842.843H18.707c-.572 0-1.045-.544-1.045-1.045zm2.309 0v-1.883a3.85 3.85 0 1 1 7.7 0v1.883"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="24.731" r="1.642"></svg:circle><svg:path d="M24 26.373v1.848"></svg:path></svg:g>`,
})
export class ArcticonsSecuregoRenaultBankDirektIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
