import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosIcon],svg[mdi-printer-pos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10H6a2 2 0 0 0-2 2v7h16v-7a2 2 0 0 0-2-2m0 4h-4v-2h4m-1-3H7V4h10Z"></svg:path>`,
})
export class MdiPrinterPosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
