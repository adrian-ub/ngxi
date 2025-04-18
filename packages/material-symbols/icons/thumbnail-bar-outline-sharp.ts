import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsThumbnailBarOutlineSharpIcon],svg[material-symbols-thumbnail-bar-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h20v16zm8-2h10V6H10zm-2 0V6H4v12zm-4 0V6zm4 0h2zM8 6h2z"></svg:path>`,
})
export class MaterialSymbolsThumbnailBarOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
