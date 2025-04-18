import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPermMediaSharpIcon],svg[material-symbols-perm-media-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 21V6h2v13h17v2zm4-4V2h7l2 2h9v13zm4-4h10l-3.45-4.5l-2.3 3l-1.55-2z"></svg:path>`,
})
export class MaterialSymbolsPermMediaSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
