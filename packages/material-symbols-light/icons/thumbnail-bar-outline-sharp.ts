import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightThumbnailBarOutlineSharpIcon],svg[material-symbols-light-thumbnail-bar-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h18v14zm6-1h11V6H9zm-1 0V6H4v12zm-4 0V6zm4 0h1zM8 6h1z"></svg:path>`,
})
export class MaterialSymbolsLightThumbnailBarOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
