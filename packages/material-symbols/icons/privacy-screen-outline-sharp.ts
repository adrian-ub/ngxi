import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPrivacyScreenOutlineSharpIcon],svg[material-symbols-privacy-screen-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9.6L7.6 6H4Zm0 7L14.575 6H10.4L4 12.425ZM5.4 18H20V6h-2.6ZM2 20V4h20v16Z"></svg:path>`,
})
export class MaterialSymbolsPrivacyScreenOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
