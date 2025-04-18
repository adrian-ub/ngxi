import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExposureNeg1Icon],svg[material-symbols-exposure-neg-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14H3v-2h7zm5.75 5V8.05l-2.3 1.65l-1.15-1.75L16.4 5H18v14z"></svg:path>`,
})
export class MaterialSymbolsExposureNeg1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
