import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerNotesOffSharpIcon],svg[material-symbols-speaker-notes-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 23.3L15.15 18H6l-4 4V4.5h2.5L11 11H8.2L.7 3.5l1.4-1.4l19.8 19.8zm.2-5.45L13.85 11H18V9h-6.15l-1-1H18V6h-8v1.15L4.85 2H22v15.85zM7 14q.425 0 .713-.288T8 13t-.288-.712T7 12t-.712.288T6 13t.288.713T7 14m0-3q.425 0 .713-.288T8 10t-.288-.712T7 9t-.712.288T6 10t.288.713T7 11"></svg:path>`,
})
export class MaterialSymbolsSpeakerNotesOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
