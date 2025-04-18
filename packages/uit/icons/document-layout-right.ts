import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitDocumentLayoutRightIcon],svg[uit-document-layout-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 12h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0 0 1m0-4h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0 0 1m11 11h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1m8-4h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1m0-11h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5m-.5 7h-6V5h6z"></svg:path>`,
})
export class UitDocumentLayoutRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
