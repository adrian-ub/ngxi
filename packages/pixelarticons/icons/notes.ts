import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsNotesIcon],svg[pixelarticons-notes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h16v20H3V2zm14 18V4H5v16zM7 6h10v2H7zm10 4H7v2h10zM7 14h7v2H7z"></svg:path>`,
})
export class PixelarticonsNotesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
