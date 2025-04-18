import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsDocumentThreatIcon],svg[grommet-icons-document-threat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M4.998 7V1H19.5L23 4.5V23h-6m1-22v5h5M9 23a5 5 0 1 0 0-10a5 5 0 0 0 0 10Zm0-12V9c0-1 0-2 2-2s2 1 2 2s0 2 2 2h2m-9 0h2v2H8z"></svg:path>`,
})
export class GrommetIconsDocumentThreatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
