import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight3dOutlineSharpIcon],svg[material-symbols-light-3d-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9.308v5.384h3.577l.808-.615V9.923l-.808-.615zm.885 4.5v-3.616H16.5v3.616zm-7.154.884h3.5l.385-.384v-2.02L10.327 12l.289-.288v-2.02l-.385-.384h-3.5v.884h3v1.366h-2v.884h2v1.366h-3zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsLight3dOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
