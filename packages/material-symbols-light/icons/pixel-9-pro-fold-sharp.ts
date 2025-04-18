import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPixel9ProFoldSharpIcon],svg[material-symbols-light-pixel-9-pro-fold-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20V4h18v16zm9-1h8V5h-8zm-2-7.5v-1H5v1zm6-3.73q.31 0 .54-.23t.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23m-6-.27v-1H5v1z"></svg:path>`,
})
export class MaterialSymbolsLightPixel9ProFoldSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
