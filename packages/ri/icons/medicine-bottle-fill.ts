import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMedicineBottleFillIcon],svg[ri-medicine-bottle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5v2a3 3 0 0 1 3 3v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10a3 3 0 0 1 3-3V5zm-4 6h-2v2H9v2h1.999L11 17h2l-.001-2H15v-2h-2zm6-9v2H5V2z"></svg:path>`,
})
export class RiMedicineBottleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
