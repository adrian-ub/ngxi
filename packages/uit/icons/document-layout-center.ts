import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitDocumentLayoutCenterIcon],svg[uit-document-layout-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 12h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5M9 5h6v6H9zm12.5 6h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1m-19-3h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1m16 0h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1m3 7h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1m-19-3h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1m11 7h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1"></svg:path>`,
})
export class UitDocumentLayoutCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
