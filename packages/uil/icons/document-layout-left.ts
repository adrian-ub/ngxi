import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilDocumentLayoutLeftIcon],svg[uil-document-layout-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m1-6h4v4H4Zm9 2h8a1 1 0 0 0 0-2h-8a1 1 0 0 0 0 2m0 10H3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m8-4H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m0-4h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilDocumentLayoutLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
