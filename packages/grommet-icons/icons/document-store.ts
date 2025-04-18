import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsDocumentStoreIcon],svg[grommet-icons-document-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M4.998 7V1H19.5L23 4.5V23h-6m1-22v5h5M3 12s1-2 6-2s6 2 6 2v9s-1 2-6 2s-6-2-6-2zm0 5s2 2 6 2s6-2 6-2M3 13s2 2 6 2s6-2 6-2"></svg:path>`,
})
export class GrommetIconsDocumentStoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
