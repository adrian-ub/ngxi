import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosOffIcon],svg[mdi-printer-pos-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.2 9l-5-5H17v5zm7.8 7.8V12a2 2 0 0 0-2-2h-4.8zm2.11 4.66l-1.27 1.27L17.11 19H4v-7a2 2 0 0 1 2-2h2.11l-7-7l1.28-1.27zM10 12H6v2h4z"></svg:path>`,
})
export class MdiPrinterPosOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
