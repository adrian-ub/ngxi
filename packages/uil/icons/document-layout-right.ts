import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilDocumentLayoutRightIcon],svg[uil-document-layout-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18H3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2M3 8h8a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m0 4h8a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m18 2H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m0-10h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-1 6h-4V6h4Z"></svg:path>`,
})
export class UilDocumentLayoutRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
