import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPermMediaSharpIcon],svg[material-symbols-light-perm-media-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19.77V7.076h1v11.692h16v1zm3-3V3h6.577l2 2H22v11.77zM9.461 13h8.693l-2.758-3.654l-2.454 3.077l-1.588-1.884z"></svg:path>`,
})
export class MaterialSymbolsLightPermMediaSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
