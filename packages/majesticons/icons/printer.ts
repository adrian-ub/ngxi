import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsPrinterIcon],svg[majesticons-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 17v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2M7 17H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1m0 0V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2M6 7h12m0 0h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-2a1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3zm5 0a1 1 0 0 0 0 2h1a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsPrinterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
