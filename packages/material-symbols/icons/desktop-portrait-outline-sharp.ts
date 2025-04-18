import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDesktopPortraitOutlineSharpIcon],svg[material-symbols-desktop-portrait-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18h5V9h-5zm-3-3h1.5V7.5H13V6H8zm12 7H4V2h16zm-2-2V4H6v16zm0-16H6z"></svg:path>`,
})
export class MaterialSymbolsDesktopPortraitOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
