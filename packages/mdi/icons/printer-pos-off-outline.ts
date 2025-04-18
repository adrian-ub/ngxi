import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosOffOutlineIcon],svg[mdi-printer-pos-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.39 1.73L1.11 3L7 8.89V10H6a2 2 0 0 0-2 2v7h13.11l3.73 3.73l1.27-1.27zM6 17v-5h4.11l5 5zM9.2 6l-2-2H17v6h1a2 2 0 0 1 2 2v4.8l-2-2V12h-2.8l-2-2H15V6zM7 13h4v2H7z"></svg:path>`,
})
export class MdiPrinterPosOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
