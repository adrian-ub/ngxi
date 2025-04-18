import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosPlayIcon],svg[mdi-printer-pos-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13.09V12a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7h9c0-3.31 2.69-6 6-6c.34 0 .67.04 1 .09M10 14H6v-2h4zm7-5H7V4h10zm5 10l-5 3v-6z"></svg:path>`,
})
export class MdiPrinterPosPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
