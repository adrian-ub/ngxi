import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsPrinterIcon],svg[bxs-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7h-1V2H6v5H5a3 3 0 0 0-3 3v7a2 2 0 0 0 2 2h2v3h12v-3h2a2 2 0 0 0 2-2v-7a3 3 0 0 0-3-3M8 4h8v3H8zm0 16v-4h8v4zm11-8h-4v-2h4z"></svg:path>`,
})
export class BxsPrinterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
