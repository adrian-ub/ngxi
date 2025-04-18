import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageFolder2FillIcon],svg[mage-folder-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.88 7.175a3.84 3.84 0 0 0-2.71-1.12h-4.36a1 1 0 0 1-.46-.11a1 1 0 0 1-.36-.32l-.87-1.33a3.84 3.84 0 0 0-3.2-1.71H5.84A3.84 3.84 0 0 0 2 6.415v11.16a3.86 3.86 0 0 0 3.84 3.84h12.33a3.84 3.84 0 0 0 3.83-3.84v-7.65a3.8 3.8 0 0 0-1.12-2.75m-4.25 9.87H7.38a1 1 0 0 1 0-2h9.25a1 1 0 1 1 0 2"></svg:path>`,
})
export class MageFolder2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
