import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosPlayOutlineIcon],svg[mdi-printer-pos-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15v-2h4v2zm-1 2h7.35c-.22.63-.35 1.3-.35 2H4v-7a2 2 0 0 1 2-2h1V4h10v6h1a2 2 0 0 1 2 2v1.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V12H6zm3-7h6V6H9zm8 6v6l5-3z"></svg:path>`,
})
export class MdiPrinterPosPlayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
