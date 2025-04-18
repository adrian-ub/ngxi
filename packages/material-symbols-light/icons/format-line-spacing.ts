import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatLineSpacingIcon],svg[material-symbols-light-format-line-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.308 19L3 15.692l.708-.707l2.1 2.088V6.927l-2.1 2.089L3 8.308L6.308 5l3.308 3.308l-.708.708l-2.1-2.089v10.146l2.1-2.089l.708.708zm6.077-1v-1H21v1.23zm0-5.5v-1H21v1zm0-5.5V6L21 5.77V7z"></svg:path>`,
})
export class MaterialSymbolsLightFormatLineSpacingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
