import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsDocumentImageIcon],svg[grommet-icons-document-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M4.998 7V1H19.5L23 4.5V23h-3M18 1v5h5M3 11h13v12H3zm4 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-2 7l2-3l2 2l4-6l3 4"></svg:path>`,
})
export class GrommetIconsDocumentImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
