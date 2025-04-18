import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdBarcodeIcon],svg[ion-md-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M88 128h48v256H88z" fill="currentColor"></svg:path><svg:path d="M232 128h48v256h-48z" fill="currentColor"></svg:path><svg:path d="M160 144h48v224h-48z" fill="currentColor"></svg:path><svg:path d="M304 144h48v224h-48z" fill="currentColor"></svg:path><svg:path d="M376 128h48v256h-48z" fill="currentColor"></svg:path><svg:path d="M104 104V56H16v400h88v-48H64V104z" fill="currentColor"></svg:path><svg:path d="M408 56v48h40v304h-40v48h88V56z" fill="currentColor"></svg:path>`,
})
export class IonMdBarcodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
