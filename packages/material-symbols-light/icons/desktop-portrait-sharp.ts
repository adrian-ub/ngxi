import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDesktopPortraitSharpIcon],svg[material-symbols-light-desktop-portrait-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.154 17.616h4.462V9.154h-4.462zM8.384 15h.885V7.27h3.5v-.886H8.385zM19 21H5V3h14z"></svg:path>`,
})
export class MaterialSymbolsLightDesktopPortraitSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
