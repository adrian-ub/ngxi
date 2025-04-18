import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileTransmitDoubleFilledIcon],svg[tdesign-file-transmit-double-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.796 16.288L6.087 15l-1.291-1.289l1.412-1.415L8.918 15l-2.71 2.704z"></svg:path><svg:path fill="currentColor" d="M0 3h7.414L11 6.586V3h5v8h8v10H0zm11 16v-8H5V5H2v14zM7 5.414V9h3.586zm12.204 10.874L17.913 15l1.291-1.289l-1.413-1.415L15.081 15l2.71 2.704z"></svg:path><svg:path fill="currentColor" d="M24 9v-.414L18.414 3H18v6z"></svg:path>`,
})
export class TdesignFileTransmitDoubleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
