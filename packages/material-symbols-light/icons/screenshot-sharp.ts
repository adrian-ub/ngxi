import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScreenshotSharpIcon],svg[material-symbols-light-screenshot-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.23 17.116v-.885h2.5v-2.5h.886v3.385zm-3.845-6.847V6.885h3.384v.884h-2.5v2.5zM6 22V2h12v20zm1-3.5h10v-13H7z"></svg:path>`,
})
export class MaterialSymbolsLightScreenshotSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
