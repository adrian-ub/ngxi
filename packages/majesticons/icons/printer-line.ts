import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsPrinterLineIcon],svg[majesticons-printer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 17v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2M7 17H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1m0 0V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2M6 7h12m0 0h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2M7 10h1"></svg:path>`,
})
export class MajesticonsPrinterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
