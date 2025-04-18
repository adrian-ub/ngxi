import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPictureInPictureMobileSharpIcon],svg[material-symbols-light-picture-in-picture-mobile-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21H5V3h14zm-2.039-8.308V5H11.27v7.692z"></svg:path>`,
})
export class MaterialSymbolsLightPictureInPictureMobileSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
