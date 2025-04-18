import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGalleryThumbnailSharpIcon],svg[material-symbols-light-gallery-thumbnail-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 18V6h12v12zm14-7V6h5v5zM4.692 14.904h7.616l-2.433-3.25L8 14.154l-1.375-1.825zM16.5 18v-5h5v5z"></svg:path>`,
})
export class MaterialSymbolsLightGalleryThumbnailSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
