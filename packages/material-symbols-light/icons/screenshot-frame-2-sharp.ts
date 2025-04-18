import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScreenshotFrame2SharpIcon],svg[material-symbols-light-screenshot-frame-2-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10V7h-3V6h4v4zM3 10V6h4v1H4v3zm14 8v-1h3v-3h1v4zM3 18v-4h1v3h3v1z"></svg:path>`,
})
export class MaterialSymbolsLightScreenshotFrame2SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
