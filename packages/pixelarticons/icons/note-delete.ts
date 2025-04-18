import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsNoteDeleteIcon],svg[pixelarticons-note-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2h10v14h-2v2h-2v-2h-2v2h2v2h-2v2H3V10h2v10h8v-6h6V4h-8zM7 4H5V2H3v2h2v2H3v2h2V6h2v2h2V6H7zm0 0h2V2H7z"></svg:path>`,
})
export class PixelarticonsNoteDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
