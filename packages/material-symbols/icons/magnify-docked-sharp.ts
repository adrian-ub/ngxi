import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMagnifyDockedSharpIcon],svg[material-symbols-magnify-docked-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h20v16zm2-5h16V6H4zm10-1.5h2v-2h2v-2h-2v-2h-2v2h-2v2h2z"></svg:path>`,
})
export class MaterialSymbolsMagnifyDockedSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
