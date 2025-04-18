import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPhotoAlbumOutlineSharpIcon],svg[material-symbols-light-photo-album-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21V3h14v18zm1-1h12V4h-2v6.116l-2-1.193l-2 1.193V4H6zm1.73-2.5h8.693l-2.74-3.654l-2.53 3.192l-1.605-1.925zM6 20V4zm6-9.885l2-1.192l2 1.192l-2-1.192z"></svg:path>`,
})
export class MaterialSymbolsLightPhotoAlbumOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
