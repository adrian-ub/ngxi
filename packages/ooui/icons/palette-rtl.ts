import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiPaletteRtlIcon],svg[ooui-palette-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15v2a3 3 0 0 0 3 3A10 10 0 1 0 0 10a5 5 0 0 0 5 5ZM3 8.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1-3 0m3-4a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1-3 0m5 0a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1-3 0m3 4a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1-3 0"></svg:path>`,
})
export class OouiPaletteRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
