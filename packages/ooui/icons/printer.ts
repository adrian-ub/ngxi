import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiPrinterIcon],svg[ooui-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1h10v4H5zM3 6a2 2 0 0 0-2 2v7h4v4h10v-4h4V8a2 2 0 0 0-2-2zm11 12H6v-6h8zm2-8a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class OouiPrinterIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
