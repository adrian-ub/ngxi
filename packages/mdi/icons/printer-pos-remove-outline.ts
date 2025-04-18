import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosRemoveOutlineIcon],svg[mdi-printer-pos-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15v-2h4v2zm-1 2h7.35c-.22.63-.35 1.3-.35 2H4v-7a2 2 0 0 1 2-2h1V4h10v6h1a2 2 0 0 1 2 2v1.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V12H6zm3-7h6V6H9zm13.54 6.88l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19z"></svg:path>`,
})
export class MdiPrinterPosRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
