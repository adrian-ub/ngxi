import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDesktopAccessDisabledOutlineSharpIcon],svg[material-symbols-light-desktop-access-disabled-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17V4.04h1.425l.96.96H4v11h10.97L1.776 2.808l.708-.708l18.684 18.685l-.707.707L15.969 17H13v2h2v1H9v-1h2v-2zm17.066-.15l-.85-.85H20V5H8.216l-1-1H21v12.85zm-6.35-6.35"></svg:path>`,
})
export class MaterialSymbolsLightDesktopAccessDisabledOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
