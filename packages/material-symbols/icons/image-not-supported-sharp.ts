import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsImageNotSupportedSharpIcon],svg[material-symbols-image-not-supported-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.475 23.3l-2.3-2.3H3V5.825L.7 3.5l1.4-1.4l19.8 19.8l-1.425 1.4ZM6 17h8.175l-2.325-2.325l-.85 1.05L9 13l-3 4Zm15 1.175L5.825 3H21v15.175Z"></svg:path>`,
})
export class MaterialSymbolsImageNotSupportedSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
