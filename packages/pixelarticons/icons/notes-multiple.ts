import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsNotesMultipleIcon],svg[pixelarticons-notes-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 0h16v20H5V0zm14 18V2H7v16zM9 4h10v2H9zm10 4H9v2h10zM9 12h7v2H9zm10 10H3V4H1v20h18z"></svg:path>`,
})
export class PixelarticonsNotesMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
