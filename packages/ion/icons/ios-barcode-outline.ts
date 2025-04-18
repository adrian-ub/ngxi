import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosBarcodeOutlineIcon],svg[ion-ios-barcode-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M48 384h80v-16H64V144h64v-16H48z" fill="currentColor"></svg:path><svg:path d="M384 128v16h64v224h-64v16h80V128z" fill="currentColor"></svg:path><svg:path d="M112 192h16v128h-16z" fill="currentColor"></svg:path><svg:path d="M384 192h16v128h-16z" fill="currentColor"></svg:path><svg:path d="M320 160h16v192h-16z" fill="currentColor"></svg:path><svg:path d="M176 160h16v192h-16z" fill="currentColor"></svg:path><svg:path d="M247 176h16v160h-16z" fill="currentColor"></svg:path>`,
})
export class IonIosBarcodeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
