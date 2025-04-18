import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionQrScannerIcon],svg[ion-qr-scanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 124.171c0-6.938 5.232-12.171 12.171-12.171H176V64h-66.829C75.717 64 48 90.717 48 124.171V192h48v-67.829z" fill="currentColor"></svg:path><svg:path d="M403.579 64H336v48h67.219c6.938 0 12.781 5.232 12.781 12.171V192h48v-67.829C464 90.717 437.033 64 403.579 64z" fill="currentColor"></svg:path><svg:path d="M416 386.829c0 6.938-5.232 12.171-12.171 12.171H336v49h67.829C437.283 448 464 420.283 464 386.829V320h-48v66.829z" fill="currentColor"></svg:path><svg:path d="M108.171 399C101.232 399 96 393.768 96 386.829V320H48v66.829C48 420.283 75.717 448 109.171 448H176v-49h-67.829z" fill="currentColor"></svg:path>`,
})
export class IonQrScannerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
