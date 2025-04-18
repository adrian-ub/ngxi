import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsDocumentConfigIcon],svg[grommet-icons-document-config-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M4.998 9V1H19.5L23 4.5V23h-7m2-22v5h5M9 14v-3m0 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0 3v-3m3-3h3M3 17h3m-1-4l2 2m4 4l2 2m0-8l-2 2m-4 4l-2 2"></svg:path>`,
})
export class GrommetIconsDocumentConfigIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
