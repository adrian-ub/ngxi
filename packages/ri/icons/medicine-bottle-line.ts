import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMedicineBottleLineIcon],svg[ri-medicine-bottle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2v2h-2v3a3 3 0 0 1 3 3v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10a3 3 0 0 1 3-3V4H5V2zm-2 7H7a1 1 0 0 0-1 1v10h12V10a1 1 0 0 0-1-1m-4 2v2h2v2h-2.001L13 17h-2l-.001-2H9v-2h2v-2zm2-7H9v3h6z"></svg:path>`,
})
export class RiMedicineBottleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
