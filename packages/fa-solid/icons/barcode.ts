import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidBarcodeIcon],svg[fa-solid-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 448V64h18v384zm26.857-.273V64H36v383.727zm27.143 0V64h8.857v383.727zm44.857 0V64h8.857v383.727zm36 0V64h17.714v383.727zm44.857 0V64h8.857v383.727zm18 0V64h8.857v383.727zm18 0V64h8.857v383.727zm35.715 0V64h18v383.727zm44.857 0V64h18v383.727zm35.999 0V64h18.001v383.727zm36.001 0V64h18.001v383.727zm26.857 0V64h18v383.727zm45.143 0V64h26.857v383.727zm35.714 0V64h9.143v383.727zm18 .273V64h18v384z"></svg:path>`,
})
export class FaSolidBarcodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
