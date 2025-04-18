import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsNoteMultipleIcon],svg[pixelarticons-note-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6H7v16h8v-2h2v-2h-2v-2h2v2h2v-2h2zM9 20V8h10v6h-6v6zm-6-2h2V4h12V2H3z"></svg:path>`,
})
export class PixelarticonsNoteMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
