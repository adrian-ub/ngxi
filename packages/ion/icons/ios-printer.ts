import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosPrinterIcon],svg[ion-ios-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128 224h256v224H128z" fill="currentColor"></svg:path><svg:path d="M127.5 224.5h256v224h-256z" fill="currentColor"></svg:path><svg:path d="M111.5 64.5h288v32h-288z" fill="currentColor"></svg:path><svg:path d="M432.5 112.5h-352c-17.645 0-33 12.842-33 30.309v158.393c0 17.468 15.355 33.299 33 33.299h31v-126h288v126h33c17.645 0 31-15.831 31-33.299V142.809c0-17.467-13.355-30.309-31-30.309z" fill="currentColor"></svg:path>`,
})
export class IonIosPrinterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
