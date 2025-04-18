import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPictureInPictureOutlineSharpIcon],svg[material-symbols-picture-in-picture-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h20v16zm2-2h16V6H4zm7-5h8V7h-8zm2-2V9h4v2zm-9 7V6z"></svg:path>`,
})
export class MaterialSymbolsPictureInPictureOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
