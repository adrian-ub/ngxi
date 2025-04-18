import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPhotoFrameOutlineSharpIcon],svg[material-symbols-light-photo-frame-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.846 19.423V18H2V5h20v13h-2.846v1.423zM3 17h18V6H3zm3.404-2.5h11.212l-3.5-4.673l-3.116 4l-2.096-2.539zM3 17V6z"></svg:path>`,
})
export class MaterialSymbolsLightPhotoFrameOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
