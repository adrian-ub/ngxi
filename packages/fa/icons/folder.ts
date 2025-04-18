import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faFolderIcon],svg[fa-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 480v704q0 92-66 158t-158 66H224q-92 0-158-66T0 1184V224q0-92 66-158T224 0h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158"></svg:path>`,
})
export class FaFolderIcon {
  readonly viewBox = input("0 0 1664 1408")
  readonly width = input("1.19em")
  readonly height = input("1em")
}
