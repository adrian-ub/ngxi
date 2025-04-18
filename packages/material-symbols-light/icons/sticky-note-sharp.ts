import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStickyNoteSharpIcon],svg[material-symbols-light-sticky-note-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.577 20H4V4h16v11.577zM15 19l4-4h-4zm-3.5-3.5h1v-6h3v-1h-7v1h3z"></svg:path>`,
})
export class MaterialSymbolsLightStickyNoteSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
