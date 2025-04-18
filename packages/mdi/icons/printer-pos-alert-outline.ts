import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosAlertOutlineIcon],svg[mdi-printer-pos-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15h-4v-2h4zm3-3v7H2v-7c0-1.1.9-2 2-2h1V4h10v6h1a2 2 0 0 1 2 2M7 10h6V6H7zm9 2H4v5h12zm4 5h2v-2h-2zm0-10v6h2V7z"></svg:path>`,
})
export class MdiPrinterPosAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
