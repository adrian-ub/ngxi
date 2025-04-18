import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileTransmitDoubleIcon],svg[tdesign-file-transmit-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.087 15l-1.291 1.288l1.413 1.416L8.919 15l-2.71-2.704l-1.413 1.415zm13.117 1.288L17.913 15l1.291-1.289l-1.413-1.415L15.081 15l2.71 2.704z"></svg:path><svg:path fill="currentColor" d="M7.414 3L11 6.586V3h7.414L24 8.586V21H0V3zM11 11H5V5H2v14h9zm2 8h9v-8h-6V5h-3zM7 9h3.586L7 5.414zm11 0h3.586L18 5.414z"></svg:path>`,
})
export class TdesignFileTransmitDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
