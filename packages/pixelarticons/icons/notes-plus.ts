import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsNotesPlusIcon],svg[pixelarticons-notes-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h16v12h-2V4H5v16h8v2H3V2zm2 4h10v2H7zm10 4H7v2h10zM7 14h7v2H7zm13 5h3v2h-3v3h-2v-3h-3v-2h3v-3h2z"></svg:path>`,
})
export class PixelarticonsNotesPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
