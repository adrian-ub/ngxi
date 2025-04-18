import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmPrinterIcon],svg[charm-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4.75 9.75h6.5v4.5h-6.5z"></svg:path><svg:path d="M4.75 4.25v-2.5h6.5v2.5m-7 8h-2.5v-7.5h12.5v7.5h-2.5"></svg:path></svg:g>`,
})
export class CharmPrinterIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
