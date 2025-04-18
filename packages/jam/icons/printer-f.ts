import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamPrinterFIcon],svg[jam-printer-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4h1a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-1V9H4v7H3a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1v2h12zM6 20v-9h8v9zM6 4V0h8v4z"></svg:path>`,
})
export class JamPrinterFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
