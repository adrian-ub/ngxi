import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPictureInPictureMobileOutlineSharpIcon],svg[material-symbols-light-picture-in-picture-mobile-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21H5V3h14zm-1-1V4H6v16zm0-16H6zm-1.038 8.692V5h-5.693v7.692zm-1-1h-3.693V6h3.692z"></svg:path>`,
})
export class MaterialSymbolsLightPictureInPictureMobileOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
