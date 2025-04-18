import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosAlertIcon],svg[mdi-printer-pos-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10H4c-1.1 0-2 .9-2 2v7h16v-7a2 2 0 0 0-2-2m0 4h-4v-2h4zm-1-5H5V4h10zm7-2v6h-2V7zm-2 8h2v2h-2z"></svg:path>`,
})
export class MdiPrinterPosAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
