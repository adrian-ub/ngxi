import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosPlusOutlineIcon],svg[mdi-printer-pos-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12h12v1.09c.33-.05.66-.09 1-.09s.67.04 1 .09V12a2 2 0 0 0-2-2h-1V4H7v6H6a2 2 0 0 0-2 2v7h9c0-.7.13-1.37.35-2H6zm3-6h6v4H9zm-2 9v-2h4v2zm16 3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"></svg:path>`,
})
export class MdiPrinterPosPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
