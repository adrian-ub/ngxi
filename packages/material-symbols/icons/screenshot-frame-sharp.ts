import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsScreenshotFrameSharpIcon],svg[material-symbols-screenshot-frame-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7V2h5v2H7v3zm0 15v-5h2v3h3v2zM17 7V4h-3V2h5v5zm-3 15v-2h3v-3h2v5z"></svg:path>`,
})
export class MaterialSymbolsScreenshotFrameSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
