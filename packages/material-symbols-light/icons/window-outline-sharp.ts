import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWindowOutlineSharpIcon],svg[material-symbols-light-window-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20H4V4h16zm-7.5-7.5V19H19v-6.5zm0-1H19V5h-6.5zm-1 0V5H5v6.5zm0 1H5V19h6.5z"></svg:path>`,
})
export class MaterialSymbolsLightWindowOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
