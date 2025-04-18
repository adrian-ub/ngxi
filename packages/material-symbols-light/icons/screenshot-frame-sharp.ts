import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScreenshotFrameSharpIcon],svg[material-symbols-light-screenshot-frame-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7V3h4v1H7v3zm0 14v-4h1v3h3v1zM17 7V4h-3V3h4v4zm-3 14v-1h3v-3h1v4z"></svg:path>`,
})
export class MaterialSymbolsLightScreenshotFrameSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
