import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosOutlineIcon],svg[mdi-printer-pos-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10h-1V4H7v6H6a2 2 0 0 0-2 2v7h16v-7a2 2 0 0 0-2-2M9 6h6v4H9zm9 11H6v-5h12zm-1-2h-4v-2h4z"></svg:path>`,
})
export class MdiPrinterPosOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
