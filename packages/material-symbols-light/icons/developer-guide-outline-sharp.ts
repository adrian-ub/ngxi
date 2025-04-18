import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDeveloperGuideOutlineSharpIcon],svg[material-symbols-light-developer-guide-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zM5 5v14h14V5h-2.5v6.116l-2-1.193l-2 1.193V5zm0 14V5z"></svg:path>`,
})
export class MaterialSymbolsLightDeveloperGuideOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
