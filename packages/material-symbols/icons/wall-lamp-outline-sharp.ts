import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWallLampOutlineSharpIcon],svg[material-symbols-wall-lamp-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-6h2v6zm5.35-10h9.3l-1.8-6h-5.7zm0 0h9.3zM6 19v-2h6v-4H5.65l3-10h8.7l3 10H14v6z"></svg:path>`,
})
export class MaterialSymbolsWallLampOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
