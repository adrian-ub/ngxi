import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamDocumentFIcon],svg[jam-document-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m1 7a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2zm0 8a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2zM4 3a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2zm0 8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2z"></svg:path>`,
})
export class JamDocumentFIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
