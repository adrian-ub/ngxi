import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimDocumentLayoutRightIcon],svg[uim-document-layout-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8H3a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2m0 4H3a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2" opacity=".5"></svg:path><svg:rect width="8" height="8" x="14" y="4" fill="currentColor" rx="1"></svg:rect><svg:path fill="currentColor" d="M21 16H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m-8 4H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2" opacity=".5"></svg:path>`,
})
export class UimDocumentLayoutRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
