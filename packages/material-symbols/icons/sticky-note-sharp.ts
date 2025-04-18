import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStickyNoteSharpIcon],svg[material-symbols-sticky-note-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21H3V3h18v13zm-1-2l4-4h-4zm-4-3h2v-6h3V8H8v2h3z"></svg:path>`,
})
export class MaterialSymbolsStickyNoteSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
