import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsQuickReferenceOutlineSharpIcon],svg[material-symbols-quick-reference-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 20h1v-4h-1zm.5-5q.2 0 .35-.15t.15-.35t-.15-.35T17 14t-.35.15t-.15.35t.15.35t.35.15M5 4v16zv5zm2 10h3.675q.275-.575.638-1.075t.812-.925H7zm0 4h3.075Q10 17.5 10 17t.075-1H7zm-4 4V2h10l6 6v2.3q-.475-.15-.975-.225T17 10V9h-5V4H5v16h5.675q.275.575.638 1.075t.812.925zm14-10q2.075 0 3.538 1.463T22 17t-1.463 3.538T17 22t-3.537-1.463T12 17t1.463-3.537T17 12"></svg:path>`,
})
export class MaterialSymbolsQuickReferenceOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
