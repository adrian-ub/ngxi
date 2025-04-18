import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnDocumentDeleteIcon],svg[typcn-document-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.707 7.293l-4-4A1 1 0 0 0 15 3H7C5.346 3 4 4.346 4 6v12c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3V8a1 1 0 0 0-.293-.707M17.586 8H16.5c-.827 0-1.5-.673-1.5-1.5V5.414zM17 19H7a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h7v1.5C14 7.879 15.121 9 16.5 9H18v9a1 1 0 0 1-1 1m-2-5H9a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2"></svg:path>`,
})
export class TypcnDocumentDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
