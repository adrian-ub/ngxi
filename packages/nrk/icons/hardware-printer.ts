import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkHardwarePrinterIcon],svg[nrk-hardware-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 5V4H6.828L6 4.828V5zM4 4v1H2v14h4v3h12v-3h4V5h-2V2H6zm0 3h16v10h-2v-3H6v3H4zm12 12v1H8v-1zm0-2H8v-1h8zm-8-6.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"></svg:path>`,
})
export class NrkHardwarePrinterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
