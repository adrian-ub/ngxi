import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPhotoAlbumSharpIcon],svg[material-symbols-light-photo-album-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21V3h14v18zm2.73-3.5h8.693l-2.74-3.654l-2.53 3.192l-1.605-1.925zM12 10.116l2-1.193l2 1.193V4h-4z"></svg:path>`,
})
export class MaterialSymbolsLightPhotoAlbumSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
