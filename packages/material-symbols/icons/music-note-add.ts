import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMusicNoteAddIcon],svg[material-symbols-music-note-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-1.65 0-2.825-1.175T8 17t1.175-2.825T12 13q.575 0 1.063.138t.937.412V3h6v4h-4v10q0 1.65-1.175 2.825T12 21M7 11V8H4V6h3V3h2v3h3v2H9v3z"></svg:path>`,
})
export class MaterialSymbolsMusicNoteAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
