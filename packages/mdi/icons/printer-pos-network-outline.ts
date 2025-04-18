import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosNetworkOutlineIcon],svg[mdi-printer-pos-network-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11h4v2h-4zm9 9v2h-7c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1H2v-2h7c0-.55.45-1 1-1h1v-2H4v-7a2 2 0 0 1 2-2h1V2h10v6h1a2 2 0 0 1 2 2v7h-7v2h1c.55 0 1 .45 1 1zM9 8h6V4H9zm9 7v-5H6v5z"></svg:path>`,
})
export class MdiPrinterPosNetworkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
