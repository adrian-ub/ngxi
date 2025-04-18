import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosNetworkIcon],svg[mdi-printer-pos-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7H7V2h10zm5 13v2h-7c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1H2v-2h7c0-.55.45-1 1-1h1v-2H4v-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7h-7v2h1c.55 0 1 .45 1 1zm-4-10h-4v2h4z"></svg:path>`,
})
export class MdiPrinterPosNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
