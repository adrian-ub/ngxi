import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScreenshotRegionIcon],svg[material-symbols-light-screenshot-region-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20.5V18h-2.5v-1H17v-2.5h1V17h2.5v1H18v2.5zM6 18v-3.5h1V17h2.5v1zm0-8.5V6h3.5v1H7v2.5zm11 0V7h-2.5V6H18v3.5z"></svg:path>`,
})
export class MaterialSymbolsLightScreenshotRegionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
