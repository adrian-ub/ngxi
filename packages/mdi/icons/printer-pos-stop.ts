import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosStopIcon],svg[mdi-printer-pos-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9H7V4h10zm2 4c-3.31 0-6 2.69-6 6H4v-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1.09c-.33-.05-.66-.09-1-.09m-9-1H6v2h4zm6 4v6h6v-6z"></svg:path>`,
})
export class MdiPrinterPosStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
