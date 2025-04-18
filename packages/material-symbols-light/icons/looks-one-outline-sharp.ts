import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLooksOneOutlineSharpIcon],svg[material-symbols-light-looks-one-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 16.5h1v-9h-3v1h2zM20 20H4V4h16zM5 19h14V5H5zM5 5v14z"></svg:path>`,
})
export class MaterialSymbolsLightLooksOneOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
