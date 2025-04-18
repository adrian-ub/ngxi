import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGlassCupSharpIcon],svg[material-symbols-light-glass-cup-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.027 21L4 3h16l-2.008 18zm.51-4.5h10.952L18.866 4H5.116z"></svg:path>`,
})
export class MaterialSymbolsLightGlassCupSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
