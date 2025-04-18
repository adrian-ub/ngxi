import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGlassCupOutlineSharpIcon],svg[material-symbols-light-glass-cup-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.027 21L4 3h16l-2.008 18zm.614-3.5l.282 2.5h10.173l.283-2.5zm-.104-1h10.952L18.866 4H5.116zM6.64 20h10.738z"></svg:path>`,
})
export class MaterialSymbolsLightGlassCupOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
