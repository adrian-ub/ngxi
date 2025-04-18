import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBookmarkRemoveOutlineSharpIcon],svg[material-symbols-bookmark-remove-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7h-6V5h6zm-9 11l-7 3V3h8v2H7v12.95l5-2.15l5 2.15V11h2v10zM7 5h6z"></svg:path>`,
})
export class MaterialSymbolsBookmarkRemoveOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
