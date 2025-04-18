import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerNotesOffOutlineSharpIcon],svg[material-symbols-speaker-notes-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14q-.425 0-.712-.288T6 13t.288-.712T7 12t.713.288T8 13t-.288.713T7 14m13.7 3.85L18.85 16H20V4H6.85l-2-2H22v15.85zM13.85 11l-2-2H18v2zm6.65 12.3L15.15 18H6l-4 4V4.8L.7 3.5l1.4-1.4l19.8 19.8zM7 11q-.425 0-.712-.288T6 10t.288-.712T7 9t.713.288T8 10t-.288.713T7 11m3.85-3L10 7.15V6h8v2zM4 6.8v10.325L5.15 16h8.05z"></svg:path>`,
})
export class MaterialSymbolsSpeakerNotesOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
