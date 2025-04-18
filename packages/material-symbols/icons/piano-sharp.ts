import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPianoSharpIcon],svg[material-symbols-piano-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18zm2-2h3.25v-4.5H7V5H5zm10.75 0H19V5h-2v9.5h-1.25zm-6 0h4.5v-4.5H13V5h-2v9.5H9.75z"></svg:path>`,
})
export class MaterialSymbolsPianoSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
