import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitDocumentLayoutLeftIcon],svg[uit-document-layout-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 12h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5M3 5h6v6H3zm9.5 3h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0 0 1m9 7h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1m-8 4h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1m8-8h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1"></svg:path>`,
})
export class UitDocumentLayoutLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
