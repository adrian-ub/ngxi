import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosPauseOutlineIcon],svg[mdi-printer-pos-pause-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12a2 2 0 0 0-2-2h-1V4H7v6H6a2 2 0 0 0-2 2v7h9c0-.7.13-1.37.35-2H6v-5h12v1.09c.33-.05.66-.09 1-.09s.67.04 1 .09zm-5-2H9V6h6zm-8 5v-2h4v2zm9 1h2v6h-2zm6 0v6h-2v-6z"></svg:path>`,
})
export class MdiPrinterPosPauseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
