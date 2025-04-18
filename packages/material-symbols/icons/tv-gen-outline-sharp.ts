import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTvGenOutlineSharpIcon],svg[material-symbols-tv-gen-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21v-2H2V4h20v15h-2v2h-1l-.65-2H5.675L5 21zm0-4h16V6H4zm8-5.5"></svg:path>`,
})
export class MaterialSymbolsTvGenOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
