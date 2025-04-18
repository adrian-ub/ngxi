import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsPrinterIcon],svg[zondicons-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16H0V6h20v10h-4v4H4zm2-4v6h8v-6zM4 0h12v5H4zM2 8v2h2V8zm4 0v2h2V8z"></svg:path>`,
})
export class ZondiconsPrinterIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
