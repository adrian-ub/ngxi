import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoTextDocumentIcon],svg[entypo-text-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1m-1 16H5V3h10zM13 5H7v2h6zm0 8H7v2h6zm0-4H7v2h6z"></svg:path>`,
})
export class EntypoTextDocumentIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
