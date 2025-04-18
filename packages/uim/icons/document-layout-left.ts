import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimDocumentLayoutLeftIcon],svg[uim-document-layout-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2m0 4h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2" opacity=".5"></svg:path><svg:rect width="8" height="8" x="2" y="4" fill="currentColor" rx="1"></svg:rect><svg:path fill="currentColor" d="M21 16H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m-8 4H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2" opacity=".5"></svg:path>`,
})
export class UimDocumentLayoutLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
