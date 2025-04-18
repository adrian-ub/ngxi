import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCellphoneRemoveIcon],svg[mdi-cellphone-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.54 16.88l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19zm-8 6.12H7a2 2 0 0 1-2-2V3c0-1.11.89-2 2-2h10a2 2 0 0 1 2 2v10c-.7 0-1.37.13-2 .35V5H7v14h6c0 1.54.58 2.94 1.54 4"></svg:path>`,
})
export class MdiCellphoneRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
