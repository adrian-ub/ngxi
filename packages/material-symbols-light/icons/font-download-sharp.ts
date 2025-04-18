import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFontDownloadSharpIcon],svg[material-symbols-light-font-download-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.439 17.577H8.5l1.062-3.011h4.877l1.061 3.011h1.062L12.433 6.192h-.868zm2.453-3.954l2.058-5.796h.1l2.058 5.796zM3 21V3h18v18z"></svg:path>`,
})
export class MaterialSymbolsLightFontDownloadSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
