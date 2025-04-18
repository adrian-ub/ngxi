import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPictureInPictureMobileOutlineSharpIcon],svg[material-symbols-picture-in-picture-mobile-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22H4V2h16zm-2-2V4H6v16zm0-16H6zm-1 9V5h-6v8zm-2-2h-2V7h2z"></svg:path>`,
})
export class MaterialSymbolsPictureInPictureMobileOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
