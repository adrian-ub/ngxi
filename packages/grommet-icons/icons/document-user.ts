import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsDocumentUserIcon],svg[grommet-icons-document-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M4.998 9V1H19.5L23 4.5V23h-7m2-22v5h5M8 11a3 3 0 1 0 0 6a3 3 0 0 0 0-6ZM3 23v-1c0-4 3-5 5-5s5 1 5 5v1z"></svg:path>`,
})
export class GrommetIconsDocumentUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
