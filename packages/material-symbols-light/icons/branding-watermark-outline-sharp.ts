import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBrandingWatermarkOutlineSharpIcon],svg[material-symbols-light-branding-watermark-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 16.5h8v-5.692h-8zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsLightBrandingWatermarkOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
