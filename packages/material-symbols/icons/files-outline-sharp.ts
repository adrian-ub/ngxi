import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilesOutlineSharpIcon],svg[material-symbols-files-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V6h8l2-2h10v16zm3.825-7H11V7.825zM4 12l4-4H4zm0 3v3h16V6h-7v9zm7-4"></svg:path>`,
})
export class MaterialSymbolsFilesOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
